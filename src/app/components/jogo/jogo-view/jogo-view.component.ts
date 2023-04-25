import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/jogo.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-jogo',
  templateUrl: './jogo-view.component.html',
  styleUrls: ['./jogo-view.component.scss']
})
export class ViewJogoComponent implements OnInit {

  jogoId: any;
  jogoDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.jogoId = this.route.snapshot.params['jogoId'];      
    this.getJogoDetailById();
  }

  getJogoDetailById() {       
    this.httpProvider.getJogoDetailById(this.jogoId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.jogoDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
