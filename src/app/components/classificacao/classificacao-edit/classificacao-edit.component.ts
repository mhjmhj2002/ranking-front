import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/classificacao.service';

@Component({
  selector: 'app-edit-classificacao',
  templateUrl: './classificacao-edit.component.html',
  styleUrls: ['./classificacao-edit.component.scss']
})
export class EditClassificacaoComponent implements OnInit {
  editClassificacaoForm: classificacaoForm = new classificacaoForm();

  @ViewChild("classificacaoForm")
  classificacaoForm!: NgForm;

  isSubmitted: boolean = false;
  classificacaoId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.classificacaoId = this.route.snapshot.params['classificacaoId'];
    this.getClassificacaoDetailById();
  }

  getClassificacaoDetailById() {
    this.httpProvider.getClassificacaoDetailById(this.classificacaoId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editClassificacaoForm.id = resultData.id;
          this.editClassificacaoForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditClassificacao(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveClassificacao(this.editClassificacaoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/ClassificacaoList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/ClassificacaoList']);
          }, 500);
        });
    }
  }
}

export class classificacaoForm {
  id: number = 0;
  nome: string = "";
}
