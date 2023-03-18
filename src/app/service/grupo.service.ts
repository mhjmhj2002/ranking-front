import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/grupo/grupos";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllGrupo: apiUrl + "/last",
  deleteGrupoById: apiUrl + "",
  getGrupoDetailById: apiUrl + "",
  saveGrupo: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllGrupo(): Observable<any> {
    return this.webApiService.get(httpLink.getAllGrupo);
  }

  public deleteGrupoById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteGrupoById + '/' + model, "");
  }

  public getGrupoDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getGrupoDetailById + '/' + model);
  }

  public saveGrupo(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveGrupo, model);
  }
  
}
