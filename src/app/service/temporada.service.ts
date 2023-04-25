import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/temporada/temporadas";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllTemporada: apiUrl + "/last",
  deleteTemporadaById: apiUrl + "",
  getTemporadaDetailById: apiUrl + "",
  saveTemporada: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllTemporada(): Observable<any> {
    return this.webApiService.get(httpLink.getAllTemporada);
  }

  public deleteTemporadaById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteTemporadaById + '/' + model, "");
  }

  public getTemporadaDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getTemporadaDetailById + '/' + model);
  }

  public saveTemporada(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveTemporada, model);
  }
  
}
