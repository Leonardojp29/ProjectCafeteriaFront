import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseUrl = 'http://localhost:8080/api/reservas';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.baseUrl);
  }

  public registrar(reserva: Reserva): Observable<any>{
    return this.http.post<any>(this.baseUrl,reserva);
  }

  public actualizarReserva(id: number, reserva: Reserva): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, reserva); 
  }
  
  public buscar(id: string): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.baseUrl}/${id}`); 
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
