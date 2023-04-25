import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/classificacao.service';

@Component({
  selector: 'app-add-classificacao',
  templateUrl: './classificacao-add.component.html',
  styleUrls: ['./classificacao-add.component.scss']
})
export class AddClassificacaoComponent implements OnInit {
  addClassificacaoForm: classificacaoForm = new classificacaoForm();

  @ViewChild("classificacaoForm")
  classificacaoForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddClassificacao(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveClassificacao(this.addClassificacaoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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