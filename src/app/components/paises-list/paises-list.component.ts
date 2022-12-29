import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises?: Pais[];
  currentPais: Pais = {};
  currentIndex = -1;
  nome = '';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.retrievePaises();
  }

  retrievePaises(): void {
    this.paisService.getAll()
      .subscribe({
        next: (data) => {
          this.paises = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNome(): void {
    this.currentPais = {};
    this.currentIndex = -1;

    this.paisService.findByNome(this.nome)
      .subscribe({
        next: (data) => {
          this.paises = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
