import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/equipe.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-equipe',
  templateUrl: './equipe-view.component.html',
  styleUrls: ['./equipe-view.component.scss']
})
export class ViewEquipeComponent implements OnInit {

  equipeId: any;
  equipeDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.equipeId = this.route.snapshot.params['equipeId'];      
    this.getEquipeDetailById();
  }

  getEquipeDetailById() {       
    this.httpProvider.getEquipeDetailById(this.equipeId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.equipeDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
