import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../../service/classificacao.service';
import { WebApiService } from '../../../service/web-api.service';

@Component({
  selector: 'app-view-classificacao',
  templateUrl: './classificacao-view.component.html',
  styleUrls: ['./classificacao-view.component.scss']
})
export class ViewClassificacaoComponent implements OnInit {

  classificacaoId: any;
  classificacaoDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.classificacaoId = this.route.snapshot.params['classificacaoId'];      
    this.getClassificacaoDetailById();
  }

  getClassificacaoDetailById() {       
    this.httpProvider.getClassificacaoDetailById(this.classificacaoId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.classificacaoDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}
