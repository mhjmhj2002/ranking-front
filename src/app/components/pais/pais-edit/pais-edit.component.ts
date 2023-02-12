import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/pais.service';

@Component({
  selector: 'app-edit-pais',
  templateUrl: './pais-edit.component.html',
  styleUrls: ['./pais-edit.component.scss']
})
export class EditPaisComponent implements OnInit {
  editPaisForm: paisForm = new paisForm();

  @ViewChild("paisForm")
  paisForm!: NgForm;

  isSubmitted: boolean = false;
  paisId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.paisId = this.route.snapshot.params['paisId'];
    this.getPaisDetailById();
  }

  getPaisDetailById() {
    this.httpProvider.getPaisDetailById(this.paisId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editPaisForm.Id = resultData.id;
          this.editPaisForm.FirstName = resultData.firstName;
          this.editPaisForm.LastName = resultData.lastName;
          this.editPaisForm.Email = resultData.email;
          this.editPaisForm.Address = resultData.address;
          this.editPaisForm.Phone = resultData.phone;
        }
      }
    },
      (error: any) => { });
  }

  EditPais(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePais(this.editPaisForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class paisForm {
  Id: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}
