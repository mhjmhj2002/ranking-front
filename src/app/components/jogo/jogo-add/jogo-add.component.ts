import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../../service/jogo.service';

@Component({
  selector: 'app-add-jogo',
  templateUrl: './jogo-add.component.html',
  styleUrls: ['./jogo-add.component.scss']
})
export class AddJogoComponent implements OnInit {
  addJogoForm: jogoForm = new jogoForm();

  @ViewChild("jogoForm")
  jogoForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddJogo(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveJogo(this.addJogoForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
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