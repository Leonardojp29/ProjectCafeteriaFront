import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  public registrar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.baseUrl,usuario);
  }

  public actualizarUsuario(id:number, usuario: Usuario): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, usuario);
  }
  
  public buscar(id:string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
