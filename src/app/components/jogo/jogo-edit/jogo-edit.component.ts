import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/jogo.service';

@Component({
  selector: 'app-edit-jogo',
  templateUrl: './jogo-edit.component.html',
  styleUrls: ['./jogo-edit.component.scss']
})
export class EditJogoComponent implements OnInit {
  editJogoForm: jogoForm = new jogoForm();

  @ViewChild("jogoForm")
  jogoForm!: NgForm;

  isSubmitted: boolean = false;
  jogoId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.jogoId = this.route.snapshot.params['jogoId'];
    this.getJogoDetailById();
  }

  getJogoDetailById() {
    this.httpProvider.getJogoDetailById(this.jogoId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editJogoForm.id = resultData.id;
          this.editJogoForm.nome = resultData.firstName;
        }
      }
    },
      (error: any) => { });
  }

  EditJogo(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveJogo(this.editJogoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/JogoList']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/JogoList']);
          }, 500);
        });
    }
  }
}

export class jogoForm {
  id: number = 0;
  nome: string = "";
}
