import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/fase.service';

@Component({
  selector: 'app-add-fase',
  templateUrl: './fase-add.component.html',
  styleUrls: ['./fase-add.component.scss']
})
export class AddFaseComponent implements OnInit {
  addFaseForm: faseForm = new faseForm();

  @ViewChild("faseForm")
  faseForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddFase(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveFase(this.addFaseForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/FaseList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/FaseList']);
          }, 500);
        });
    }
  }

}

export class faseForm {
  id: number = 0;
  nome: string = "";
}