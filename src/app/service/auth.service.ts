import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';
  private loggedIn = false;
  private currentUser: Usuario | null = null;
  isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  login(usuario: Usuario): Observable<any> {
    this.loggedIn = true;
    this.currentUser = usuario;
    return this.http.post<any>(`${this.baseUrl}/login`, usuario).pipe(
      tap((response: any) => {
        this.loggedIn = true;
        this.currentUser = usuario;
        localStorage.setItem('tipoUsuario', response.tipo_usuario_id);
      })
    );
  }

  getCurrentUser(): Usuario | null {
    return this.currentUser;
  }

  
  

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUser = null;
    this.isAdmin = false; // Restablecer isAdmin a false al cerrar sesión
    localStorage.removeItem('tipoUsuario');
  }
  
  
  setAdminStatus(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }
}
