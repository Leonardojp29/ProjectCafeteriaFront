import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl = 'http://localhost:8080/api/menues';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.baseUrl);
  }

  public registrar(menu: Menu): Observable<any> {
    return this.http.post<any>(this.baseUrl, menu);
  }

  public actualizarMenu(id: number, menu: Menu): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, menu); 
  }
  
  public buscar(id: string): Observable<Menu> {
    return this.http.get<Menu>(`${this.baseUrl}/${id}`); 
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  uploadImage(file: File): Observable<string> { 
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.baseUrl + '/upload', formData, { responseType: 'text' }); 
  }
}
