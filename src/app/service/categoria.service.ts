import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:8080/api/categorias';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseUrl);
  }
  public registrar(categoria: Categoria): Observable<any>{
    return this.http.post<any>(this.baseUrl,categoria);
  }

  public actualizarCategoria(idcategoria: number, categoria: Categoria): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${idcategoria}`, categoria); 
  }
  
  public buscar(idcategoria: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${idcategoria}`); 
  }

  public eliminar(idcategoria: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${idcategoria}`);
  }
  
}