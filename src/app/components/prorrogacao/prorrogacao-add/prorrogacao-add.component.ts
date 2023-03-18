import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/prorrogacao.service';

@Component({
  selector: 'app-add-prorrogacao',
  templateUrl: './prorrogacao-add.component.html',
  styleUrls: ['./prorrogacao-add.component.scss']
})
export class AddProrrogacaoComponent implements OnInit {
  addProrrogacaoForm: prorrogacaoForm = new prorrogacaoForm();

  @ViewChild("prorrogacaoForm")
  prorrogacaoForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddProrrogacao(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProrrogacao(this.addProrrogacaoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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