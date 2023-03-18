import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/torneio.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-torneio',
  templateUrl: './torneio-view.component.html',
  styleUrls: ['./torneio-view.component.scss']
})
export class ViewTorneioComponent implements OnInit {

  torneioId: any;
  torneioDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.torneioId = this.route.snapshot.params['torneioId'];      
    this.getTorneioDetailById();
  }

  getTorneioDetailById() {       
    this.httpProvider.getTorneioDetailById(this.torneioId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.torneioDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
