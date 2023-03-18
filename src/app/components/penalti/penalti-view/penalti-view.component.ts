import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/penalti.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-penalti',
  templateUrl: './penalti-view.component.html',
  styleUrls: ['./penalti-view.component.scss']
})
export class ViewPenaltiComponent implements OnInit {

  penaltiId: any;
  penaltiDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.penaltiId = this.route.snapshot.params['penaltiId'];      
    this.getPenaltiDetailById();
  }

  getPenaltiDetailById() {       
    this.httpProvider.getPenaltiDetailById(this.penaltiId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.penaltiDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
