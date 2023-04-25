import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/penalti.service';

@Component({
  selector: 'app-add-penalti',
  templateUrl: './penalti-add.component.html',
  styleUrls: ['./penalti-add.component.scss']
})
export class AddPenaltiComponent implements OnInit {
  addPenaltiForm: penaltiForm = new penaltiForm();

  @ViewChild("penaltiForm")
  penaltiForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddPenalti(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePenalti(this.addPenaltiForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/PenaltiList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/PenaltiList']);
          }, 500);
        });
    }
  }

}

export class penaltiForm {
  id: number = 0;
  nome: string = "";
}