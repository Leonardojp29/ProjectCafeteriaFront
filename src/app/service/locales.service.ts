import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Locales } from '../model/locales';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private baseUrl = 'http://localhost:8080/api/locales';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Locales[]>{
    return this.http.get<Locales[]>(this.baseUrl);
  }

  public registrar(locales: Locales): Observable<any>{
    return this.http.post<any>(this.baseUrl,locales);
  }

  public actualizarLocales(id: number, locales: Locales): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, locales); 
  }
  
  public buscar(id: string): Observable<Locales> {
    return this.http.get<Locales>(`${this.baseUrl}/${id}`); 
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
  
}