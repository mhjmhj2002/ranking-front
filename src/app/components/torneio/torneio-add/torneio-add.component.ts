import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/torneio.service';

@Component({
  selector: 'app-add-torneio',
  templateUrl: './torneio-add.component.html',
  styleUrls: ['./torneio-add.component.scss']
})
export class AddTorneioComponent implements OnInit {
  addTorneioForm: torneioForm = new torneioForm();

  @ViewChild("torneioForm")
  torneioForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddTorneio(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveTorneio(this.addTorneioForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/TorneioList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/TorneioList']);
          }, 500);
        });
    }
  }

}

export class torneioForm {
  id: number = 0;
  nome: string = "";
}