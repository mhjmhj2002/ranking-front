import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/grupo.service';

@Component({
  selector: 'app-edit-grupo',
  templateUrl: './grupo-edit.component.html',
  styleUrls: ['./grupo-edit.component.scss']
})
export class EditGrupoComponent implements OnInit {
  editGrupoForm: grupoForm = new grupoForm();

  @ViewChild("grupoForm")
  grupoForm!: NgForm;

  isSubmitted: boolean = false;
  grupoId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.grupoId = this.route.snapshot.params['grupoId'];
    this.getGrupoDetailById();
  }

  getGrupoDetailById() {
    this.httpProvider.getGrupoDetailById(this.grupoId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editGrupoForm.id = resultData.id;
          this.editGrupoForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditGrupo(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveGrupo(this.editGrupoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
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
