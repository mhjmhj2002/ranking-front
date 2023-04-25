import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/fase.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-fase',
  templateUrl: './fase-view.component.html',
  styleUrls: ['./fase-view.component.scss']
})
export class ViewFaseComponent implements OnInit {

  faseId: any;
  faseDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.faseId = this.route.snapshot.params['faseId'];      
    this.getFaseDetailById();
  }

  getFaseDetailById() {       
    this.httpProvider.getFaseDetailById(this.faseId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.faseDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
