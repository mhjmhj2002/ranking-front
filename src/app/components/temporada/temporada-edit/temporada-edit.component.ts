import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/temporada.service';

@Component({
  selector: 'app-edit-temporada',
  templateUrl: './temporada-edit.component.html',
  styleUrls: ['./temporada-edit.component.scss']
})
export class EditTemporadaComponent implements OnInit {
  editTemporadaForm: temporadaForm = new temporadaForm();

  @ViewChild("temporadaForm")
  temporadaForm!: NgForm;

  isSubmitted: boolean = false;
  temporadaId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.temporadaId = this.route.snapshot.params['temporadaId'];
    this.getTemporadaDetailById();
  }

  getTemporadaDetailById() {
    this.httpProvider.getTemporadaDetailById(this.temporadaId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editTemporadaForm.id = resultData.id;
          this.editTemporadaForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditTemporada(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveTemporada(this.editTemporadaForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/TemporadaList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/TemporadaList']);
          }, 500);
        });
    }
  }
}

export class temporadaForm {
  id: number = 0;
  nome: string = "";
}
