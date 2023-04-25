import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/temporada.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-temporada',
  templateUrl: './temporada-view.component.html',
  styleUrls: ['./temporada-view.component.scss']
})
export class ViewTemporadaComponent implements OnInit {

  temporadaId: any;
  temporadaDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.temporadaId = this.route.snapshot.params['temporadaId'];      
    this.getTemporadaDetailById();
  }

  getTemporadaDetailById() {       
    this.httpProvider.getTemporadaDetailById(this.temporadaId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.temporadaDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
