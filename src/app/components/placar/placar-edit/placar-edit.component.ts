import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/placar.service';

@Component({
  selector: 'app-edit-placar',
  templateUrl: './placar-edit.component.html',
  styleUrls: ['./placar-edit.component.scss']
})
export class EditPlacarComponent implements OnInit {
  editPlacarForm: placarForm = new placarForm();

  @ViewChild("placarForm")
  placarForm!: NgForm;

  isSubmitted: boolean = false;
  placarId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.placarId = this.route.snapshot.params['placarId'];
    this.getPlacarDetailById();
  }

  getPlacarDetailById() {
    this.httpProvider.getPlacarDetailById(this.placarId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editPlacarForm.id = resultData.id;
          this.editPlacarForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditPlacar(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePlacar(this.editPlacarForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/PlacarList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/PlacarList']);
          }, 500);
        });
    }
  }
}

export class placarForm {
  id: number = 0;
  nome: string = "";
}
