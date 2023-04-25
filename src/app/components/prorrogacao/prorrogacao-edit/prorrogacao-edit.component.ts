import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/prorrogacao.service';

@Component({
  selector: 'app-edit-prorrogacao',
  templateUrl: './prorrogacao-edit.component.html',
  styleUrls: ['./prorrogacao-edit.component.scss']
})
export class EditProrrogacaoComponent implements OnInit {
  editProrrogacaoForm: prorrogacaoForm = new prorrogacaoForm();

  @ViewChild("prorrogacaoForm")
  prorrogacaoForm!: NgForm;

  isSubmitted: boolean = false;
  prorrogacaoId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.prorrogacaoId = this.route.snapshot.params['prorrogacaoId'];
    this.getProrrogacaoDetailById();
  }

  getProrrogacaoDetailById() {
    this.httpProvider.getProrrogacaoDetailById(this.prorrogacaoId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editProrrogacaoForm.id = resultData.id;
          this.editProrrogacaoForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditProrrogacao(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProrrogacao(this.editProrrogacaoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/ProrrogacaoList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/ProrrogacaoList']);
          }, 500);
        });
    }
  }
}

export class prorrogacaoForm {
  id: number = 0;
  nome: string = "";
}
