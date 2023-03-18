import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/penalti/penalties";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllPenalti: apiUrl + "/last",
  deletePenaltiById: apiUrl + "",
  getPenaltiDetailById: apiUrl + "",
  savePenalti: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllPenalti(): Observable<any> {
    return this.webApiService.get(httpLink.getAllPenalti);
  }

  public deletePenaltiById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deletePenaltiById + '/' + model, "");
  }

  public getPenaltiDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getPenaltiDetailById + '/' + model);
  }

  public savePenalti(model: any): Observable<any> {
    return this.webApiService.post(httpLink.savePenalti, model);
  }
  
}
