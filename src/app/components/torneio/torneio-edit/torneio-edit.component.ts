import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/torneio.service';

@Component({
  selector: 'app-edit-torneio',
  templateUrl: './torneio-edit.component.html',
  styleUrls: ['./torneio-edit.component.scss']
})
export class EditTorneioComponent implements OnInit {
  editTorneioForm: torneioForm = new torneioForm();

  @ViewChild("torneioForm")
  torneioForm!: NgForm;

  isSubmitted: boolean = false;
  torneioId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.torneioId = this.route.snapshot.params['torneioId'];
    this.getTorneioDetailById();
  }

  getTorneioDetailById() {
    this.httpProvider.getTorneioDetailById(this.torneioId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editTorneioForm.id = resultData.id;
          this.editTorneioForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditTorneio(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveTorneio(this.editTorneioForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
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
