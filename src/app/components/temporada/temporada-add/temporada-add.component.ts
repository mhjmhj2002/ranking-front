import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/temporada.service';

@Component({
  selector: 'app-add-temporada',
  templateUrl: './temporada-add.component.html',
  styleUrls: ['./temporada-add.component.scss']
})
export class AddTemporadaComponent implements OnInit {
  addTemporadaForm: temporadaForm = new temporadaForm();

  @ViewChild("temporadaForm")
  temporadaForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddTemporada(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveTemporada(this.addTemporadaForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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