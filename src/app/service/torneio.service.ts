import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/torneio/torneios";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllTorneio: apiUrl + "/last",
  deleteTorneioById: apiUrl + "",
  getTorneioDetailById: apiUrl + "",
  saveTorneio: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllTorneio(): Observable<any> {
    return this.webApiService.get(httpLink.getAllTorneio);
  }

  public deleteTorneioById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteTorneioById + '/' + model, "");
  }

  public getTorneioDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getTorneioDetailById + '/' + model);
  }

  public saveTorneio(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveTorneio, model);
  }
  
}
