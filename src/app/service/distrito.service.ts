import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Distrito } from '../model/distrito';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private baseUrl = 'http://localhost:8080/api/distritos';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Distrito[]>{
    return this.http.get<Distrito[]>(this.baseUrl);
  }
  public buscar(IDdistrito:number): Observable<Distrito>{
    return this.http.get<Distrito>(`${this.baseUrl}/${IDdistrito}`);
  }
  
}