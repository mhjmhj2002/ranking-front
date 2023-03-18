import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/grupo.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-grupo',
  templateUrl: './grupo-view.component.html',
  styleUrls: ['./grupo-view.component.scss']
})
export class ViewGrupoComponent implements OnInit {

  grupoId: any;
  grupoDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.grupoId = this.route.snapshot.params['grupoId'];      
    this.getGrupoDetailById();
  }

  getGrupoDetailById() {       
    this.httpProvider.getGrupoDetailById(this.grupoId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.grupoDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
