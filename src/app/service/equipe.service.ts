import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/ranking/equipe/equipes";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllEquipe: apiUrl + "/last",
  deleteEquipeById: apiUrl + "",
  getEquipeDetailById: apiUrl + "",
  saveEquipe: apiUrl + ""
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllEquipe(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEquipe);
  }

  public deleteEquipeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEquipeById + '/' + model, "");
  }

  public getEquipeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEquipeDetailById + '/' + model);
  }

  public saveEquipe(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEquipe, model);
  }
  
}
