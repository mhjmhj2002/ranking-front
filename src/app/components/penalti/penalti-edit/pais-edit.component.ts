import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/penalti.service';

@Component({
  selector: 'app-edit-penalti',
  templateUrl: './penalti-edit.component.html',
  styleUrls: ['./penalti-edit.component.scss']
})
export class EditPenaltiComponent implements OnInit {
  editPenaltiForm: penaltiForm = new penaltiForm();

  @ViewChild("penaltiForm")
  penaltiForm!: NgForm;

  isSubmitted: boolean = false;
  penaltiId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.penaltiId = this.route.snapshot.params['penaltiId'];
    this.getPenaltiDetailById();
  }

  getPenaltiDetailById() {
    this.httpProvider.getPenaltiDetailById(this.penaltiId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editPenaltiForm.id = resultData.id;
          this.editPenaltiForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditPenalti(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePenalti(this.editPenaltiForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
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
