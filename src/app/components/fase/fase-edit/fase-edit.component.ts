import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/fase.service';

@Component({
  selector: 'app-edit-fase',
  templateUrl: './fase-edit.component.html',
  styleUrls: ['./fase-edit.component.scss']
})
export class EditFaseComponent implements OnInit {
  editFaseForm: faseForm = new faseForm();

  @ViewChild("faseForm")
  faseForm!: NgForm;

  isSubmitted: boolean = false;
  faseId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.faseId = this.route.snapshot.params['faseId'];
    this.getFaseDetailById();
  }

  getFaseDetailById() {
    this.httpProvider.getFaseDetailById(this.faseId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editFaseForm.id = resultData.id;
          this.editFaseForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditFase(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveFase(this.editFaseForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
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
