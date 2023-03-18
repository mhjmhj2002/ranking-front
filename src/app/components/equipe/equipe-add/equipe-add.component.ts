import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './equipe-add.component.html',
  styleUrls: ['./equipe-add.component.scss']
})
export class AddEquipeComponent implements OnInit {
  addEquipeForm: equipeForm = new equipeForm();

  @ViewChild("equipeForm")
  equipeForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddEquipe(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEquipe(this.addEquipeForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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