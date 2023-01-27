import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises: Pais[] = [];
  currentPais: Pais = {};
  currentIndex = -1;
  nome = '';

  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5,10, 50];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.retrievePaises();
  }

  getRequestParams(searchNome: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchNome) {
      params['nome'] = searchNome;
    }

    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }

    return params;
  }

  retrievePaises(): void {
    const params = this.getRequestParams(this.nome, this.page, this.pageSize);

    this.paisService.getAll(params)
      .subscribe({
        next: (data) => {
          const { paises, totalItems } = data;
          this.paises = paises;
          this.count = totalItems;
          console.log('data:');
          console.log(data);
        },
        error: (err) => {
          console.log('erro:');
          console.log(err);
        }
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrievePaises();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievePaises();
  }

  refreshList(): void {
    this.retrievePaises();
    this.currentPais = {};
    this.currentIndex = -1;
  }

  setActivePais(pais: Pais, index: number): void {
    this.currentPais = pais;
    this.currentIndex = index;
  }

  removeAllPaises(): void {
    this.paisService.deleteAll()
      .subscribe({
        next: res => {
          console.log(res);
          this.refreshList();
        },
        error: err => {
          console.log(err);
        }
      });

  }

  searchNome(): void {
    this.page = 1;
    this.retrievePaises();
  }

}