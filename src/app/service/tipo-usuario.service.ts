import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../model/tipo-usuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  private baseUrl = 'http://localhost:8080/api/tipousuarios';

  constructor(private http:HttpClient) { }

  public lista(): Observable<TipoUsuario[]>{
    return this.http.get<TipoUsuario[]>(this.baseUrl);
  }
  
}