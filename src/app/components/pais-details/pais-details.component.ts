import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-pais-details',
  templateUrl: './pais-details.component.html',
  styleUrls: ['./pais-details.component.css']
})
export class PaisDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPais: Pais = {
    nome: ''
  };
  
  message = '';

  constructor(
    private paisService: PaisService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPais(this.route.snapshot.params["id"]);
    }
  }

  getPais(id: string): void {
    this.paisService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPais = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateNome(status: string): void {
    const data = {
      nome: this.currentPais.nome
    };

    this.message = '';

    this.paisService.update(this.currentPais.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPais.nome = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updatePais(): void {
    this.message = '';

    this.paisService.update(this.currentPais.id, this.currentPais)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This pais was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePais(): void {
    this.paisService.delete(this.currentPais.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/paises']);
        },
        error: (e) => console.error(e)
      });
  }

}
