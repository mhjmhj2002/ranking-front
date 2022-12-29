import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-add-pais',
  templateUrl: './add-pais.component.html',
  styleUrls: ['./add-pais.component.css']
})
export class AddPaisComponent implements OnInit {

  pais: Pais = {
    nome: ''
  };
  submitted = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  savePais(): void {
    const data = {
      title: this.pais.nome
    };

    this.paisService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPais(): void {
    this.submitted = false;
    this.pais = {
      nome: ''
    };
  }
}
