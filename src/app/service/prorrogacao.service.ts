import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/prorrogacao/prorrogacoes";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllProrrogacao: apiUrl + "/last",
  deleteProrrogacaoById: apiUrl + "",
  getProrrogacaoDetailById: apiUrl + "",
  saveProrrogacao: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllProrrogacao(): Observable<any> {
    return this.webApiService.get(httpLink.getAllProrrogacao);
  }

  public deleteProrrogacaoById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteProrrogacaoById + '/' + model, "");
  }

  public getProrrogacaoDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getProrrogacaoDetailById + '/' + model);
  }

  public saveProrrogacao(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveProrrogacao, model);
  }
  
}
