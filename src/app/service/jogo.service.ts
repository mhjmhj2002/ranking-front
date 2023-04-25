import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/jogo/jogos";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllJogo: apiUrl + "/last",
  deleteJogoById: apiUrl + "",
  getJogoDetailById: apiUrl + "",
  saveJogo: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllJogo(): Observable<any> {
    return this.webApiService.get(httpLink.getAllJogo);
  }

  public deleteJogoById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteJogoById + '/' + model, "");
  }

  public getJogoDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getJogoDetailById + '/' + model);
  }

  public saveJogo(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveJogo, model);
  }
  
}
