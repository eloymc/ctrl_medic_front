import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }

  paises(){
    return this.httpClient.get('https://restcountries.com/v2/all');
  }

  cp(pais:string,cp:string){
    return this.httpClient.get('https://api.zippopotam.us/'+pais+'/'+cp);
  }

}
