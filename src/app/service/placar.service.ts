import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/placar/placares";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllPlacar: apiUrl + "/last",
  deletePlacarById: apiUrl + "",
  getPlacarDetailById: apiUrl + "",
  savePlacar: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllPlacar(): Observable<any> {
    return this.webApiService.get(httpLink.getAllPlacar);
  }

  public deletePlacarById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deletePlacarById + '/' + model, "");
  }

  public getPlacarDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getPlacarDetailById + '/' + model);
  }

  public savePlacar(model: any): Observable<any> {
    return this.webApiService.post(httpLink.savePlacar, model);
  }
  
}
