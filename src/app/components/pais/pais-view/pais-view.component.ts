import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/pais.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-pais',
  templateUrl: './pais-view.component.html',
  styleUrls: ['./pais-view.component.scss']
})
export class ViewPaisComponent implements OnInit {

  paisId: any;
  paisDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.paisId = this.route.snapshot.params['paisId'];      
    this.getPaisDetailById();
  }

  getPaisDetailById() {       
    this.httpProvider.getPaisDetailById(this.paisId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.paisDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
