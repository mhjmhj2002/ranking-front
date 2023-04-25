import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/placar.service';

@Component({
  selector: 'app-add-placar',
  templateUrl: './placar-add.component.html',
  styleUrls: ['./placar-add.component.scss']
})
export class AddPlacarComponent implements OnInit {
  addPlacarForm: placarForm = new placarForm();

  @ViewChild("placarForm")
  placarForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddPlacar(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.savePlacar(this.addPlacarForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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