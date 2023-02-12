import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/pais/paises";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllPais: apiUrl + "/last",
  deletePaisById: apiUrl + "",
  getPaisDetailById: apiUrl + "",
  savePais: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllPais(): Observable<any> {
    return this.webApiService.get(httpLink.getAllPais);
  }

  public deletePaisById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deletePaisById + '/' + model, "");
  }

  public getPaisDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getPaisDetailById + '/' + model);
  }

  public savePais(model: any): Observable<any> {
    return this.webApiService.post(httpLink.savePais, model);
  }
  
}
