import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/equipe.service';

@Component({
  selector: 'app-edit-equipe',
  templateUrl: './equipe-edit.component.html',
  styleUrls: ['./equipe-edit.component.scss']
})
export class EditEquipeComponent implements OnInit {
  editEquipeForm: equipeForm = new equipeForm();

  @ViewChild("equipeForm")
  equipeForm!: NgForm;

  isSubmitted: boolean = false;
  equipeId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.equipeId = this.route.snapshot.params['equipeId'];
    this.getEquipeDetailById();
  }

  getEquipeDetailById() {
    this.httpProvider.getEquipeDetailById(this.equipeId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editEquipeForm.id = resultData.id;
          this.editEquipeForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditEquipe(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEquipe(this.editEquipeForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/EquipeList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/EquipeList']);
          }, 500);
        });
    }
  }
}

export class equipeForm {
  id: number = 0;
  nome: string = "";
}
