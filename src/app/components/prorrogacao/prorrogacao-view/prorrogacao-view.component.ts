import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/prorrogacao.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-prorrogacao',
  templateUrl: './prorrogacao-view.component.html',
  styleUrls: ['./prorrogacao-view.component.scss']
})
export class ViewProrrogacaoComponent implements OnInit {

  prorrogacaoId: any;
  prorrogacaoDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.prorrogacaoId = this.route.snapshot.params['prorrogacaoId'];      
    this.getProrrogacaoDetailById();
  }

  getProrrogacaoDetailById() {       
    this.httpProvider.getProrrogacaoDetailById(this.prorrogacaoId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.prorrogacaoDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
