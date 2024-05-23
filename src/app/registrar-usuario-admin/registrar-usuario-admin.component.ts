import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from '../model/tipo-usuario';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { TipoUsuarioService } from '../service/tipo-usuario.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario-admin',
  templateUrl: './registrar-usuario-admin.component.html',
  styleUrl: './registrar-usuario-admin.component.css'
})
export class RegistrarUsuarioAdminComponent implements OnInit {
  tipoUsuario: TipoUsuario[] = [];
  nuevoUsuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    usuario: '',
    password: '',
    tipoUsuario_ID: 0
  };
  errorRegistro: string = '';
  mensajeConfirmacion: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private tipoUsuarioService: TipoUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarTipoUsuarios();
  }

  cargarTipoUsuarios(): void {
    this.tipoUsuarioService.lista().subscribe(
      (data: TipoUsuario[]) => {
        this.tipoUsuario = data;
      },
      error => {
        console.error('Error al cargar los tipos de usuario', error);
      }
    );
  }

  registrarUsuario(): void {
    if (this.camposValidos()) {
      this.errorRegistro = '';
      this.mensajeConfirmacion = '🎉Usuario registrado correctamente🎉';
      this.usuarioService.registrar(this.nuevoUsuario).subscribe(
        response => {
          console.log('Usuario registrado con éxito:', response);
          
          this.nuevoUsuario = {
            id: 0,
            nombre: '',
            apellido: '',
            email: '',
            usuario: '',
            password: '',
            tipoUsuario_ID: 0
          };
          this.router.navigate(['/registrar-usuario-admin']);
        },
        error => {
          console.error('Error al registrar el usuario:', error);
        }
      );
    } else {
      this.errorRegistro = 'Por favor complete todos los campos.';
    }
  }

  camposValidos(): boolean {
    return (
      this.nuevoUsuario.nombre.trim() !== '' &&
      this.nuevoUsuario.apellido.trim() !== '' &&
      this.nuevoUsuario.email.trim() !== '' &&
      this.nuevoUsuario.usuario.trim() !== '' &&
      this.nuevoUsuario.password.trim() !== '' &&
      this.nuevoUsuario.tipoUsuario_ID !== 0
    );
  }
  regresar(): void {
    this.router.navigate(['/usuarios']); 
  }
}
