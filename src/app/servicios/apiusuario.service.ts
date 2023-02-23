import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Usuario } from '../models/usuario';

const httpOption = {
  headers: new HttpHeaders({
    'contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiusuarioService {

  url: string = 'https://localhost:44340/api/Usuario';

  constructor(
    private _http: HttpClient
  ) { }

  getUsuarios(): Observable<Response>{
    return this._http.get<Response>(this.url);

  }
  getOnlyUser(){
    return this._http.get<Response>(this.url,httpOption);
  }
  add(usuario: Usuario):Observable<Response>{
    return this._http.post<Response>(this.url,usuario,httpOption);

  }

  edit(usuario: Usuario):Observable<Response>{
    return this._http.put<Response>(this.url,usuario,httpOption);

  }
  
  delete(id : number):Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);

  }




}
