import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/fase/fases";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllFase: apiUrl + "/last",
  deleteFaseById: apiUrl + "",
  getFaseDetailById: apiUrl + "",
  saveFase: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllFase(): Observable<any> {
    return this.webApiService.get(httpLink.getAllFase);
  }

  public deleteFaseById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteFaseById + '/' + model, "");
  }

  public getFaseDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getFaseDetailById + '/' + model);
  }

  public saveFase(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveFase, model);
  }
  
}
