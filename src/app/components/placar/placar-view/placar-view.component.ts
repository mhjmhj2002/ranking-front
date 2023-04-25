import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/placar.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-placar',
  templateUrl: './placar-view.component.html',
  styleUrls: ['./placar-view.component.scss']
})
export class ViewPlacarComponent implements OnInit {

  placarId: any;
  placarDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.placarId = this.route.snapshot.params['placarId'];      
    this.getPlacarDetailById();
  }

  getPlacarDetailById() {       
    this.httpProvider.getPlacarDetailById(this.placarId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.placarDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
