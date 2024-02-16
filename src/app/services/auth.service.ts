import { Injectable } from '@angular/core';
import { GlobalsService } from '../globals.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'Bearer tu-token-de-autenticacion'
    // Agrega otros encabezados según tus necesidades
  });

  constructor(
    private _globals: GlobalsService,
    private _httpClient: HttpClient
  ) { }

  login(datos:any){
    return this._httpClient.post(this._globals.HOST_BACK + 'auth/login',datos);
  }

  logout(){
    return this._httpClient.get(this._globals.HOST_BACK + 'auth/logout');
  }

  checkUser(){
    return this._httpClient.get(this._globals.HOST_BACK + 'auth/acceso');
  }

  getUser(){
    return this._httpClient.get(this._globals.HOST_BACK + 'auth/user');
  }

  getToken(){
    return localStorage.getItem('tk');
  }

}
