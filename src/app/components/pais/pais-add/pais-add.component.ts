import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/pais.service';

@Component({
  selector: 'app-add-pais',
  templateUrl: './pais-add.component.html',
  styleUrls: ['./pais-add.component.scss']
})
export class AddPaisComponent implements OnInit {
  addPaisForm: paisForm = new paisForm();

  @ViewChild("paisForm")
  paisForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddPais(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePais(this.addPaisForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/PaisList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/PaisList']);
          }, 500);
        });
    }
  }

}

export class paisForm {
  id: number = 0;
  nome: string = "";
}