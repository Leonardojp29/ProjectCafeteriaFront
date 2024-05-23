import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: Usuario = { id: 0, nombre: '', apellido: '', email: '', usuario: '', password: '', tipoUsuario_ID: 0 };
  errorMensaje: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.usuario).subscribe({
      next: () => {
        const tipoUsuario = localStorage.getItem('tipoUsuario');
        if (tipoUsuario === '1') { // 1 para admin
          this.authService.setAdminStatus(true); // Establecer estado de admin
          this.router.navigate(['/home-admin']);
        } else if (tipoUsuario === '2') { // 2 para cliente
          this.router.navigate(['/home']);
        } else {
          console.error('Tipo de usuario desconocido');
        }
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        this.errorMensaje = 'Usuario o contraseña incorrecta ⚠︎';
      },
    });
  }
}
