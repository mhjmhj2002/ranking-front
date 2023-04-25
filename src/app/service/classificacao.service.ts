import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/classificacao/classificacoes";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllClassificacao: apiUrl + "/last",
  deleteClassificacaoById: apiUrl + "",
  getClassificacaoDetailById: apiUrl + "",
  saveClassificacao: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllClassificacao(): Observable<any> {
    return this.webApiService.get(httpLink.getAllClassificacao);
  }

  public deleteClassificacaoById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteClassificacaoById + '/' + model, "");
  }

  public getClassificacaoDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getClassificacaoDetailById + '/' + model);
  }

  public saveClassificacao(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveClassificacao, model);
  }
  
}
