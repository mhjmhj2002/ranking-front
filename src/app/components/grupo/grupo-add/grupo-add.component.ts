import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/grupo.service';

@Component({
  selector: 'app-add-grupo',
  templateUrl: './grupo-add.component.html',
  styleUrls: ['./grupo-add.component.scss']
})
export class AddGrupoComponent implements OnInit {
  addGrupoForm: grupoForm = new grupoForm();

  @ViewChild("grupoForm")
  grupoForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddGrupo(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveGrupo(this.addGrupoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/GrupoList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/GrupoList']);
          }, 500);
        });
    }
  }

}

export class grupoForm {
  id: number = 0;
  nome: string = "";
}