import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  nuevoUsuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    usuario: '',
    password: '',
    tipoUsuario_ID: 2,
  };
  mensajeConfirmacion: string = ''; // Propiedad para el mensaje de confirmación
  mensajeError: string = ''; // Propiedad para el mensaje de error

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  registrarUsuario() {
    // Validar si los campos obligatorios están vacíos
    if (
      !this.nuevoUsuario.nombre ||
      !this.nuevoUsuario.apellido ||
      !this.nuevoUsuario.email ||
      !this.nuevoUsuario.usuario ||
      !this.nuevoUsuario.password ||
      !this.nuevoUsuario.tipoUsuario_ID
    ) {
      this.mensajeError = 'Por favor complete todos los campos del formulario ⚠︎';
      return; 
    }

    this.usuarioService.registrar(this.nuevoUsuario)
      .subscribe(
        (response: any) => {
          console.log('Usuario registrado con éxito: ', response);
          this.mensajeConfirmacion = '🎉Usuario registrado correctamente🎉';
          this.mensajeError = ''; 
          this.nuevoUsuario = {
            id: 0,
            nombre: '',
            apellido: '',
            email: '',
            usuario: '',
            password: '',
            tipoUsuario_ID: 2,
          };
          setTimeout(() => {
            this.router.navigate(['/registrar-usuario']);
          }, 3000); 
        },
        (error: any) => {
          console.error('Error al registrar el usuario: ', error);
        }
      );
  }
}
