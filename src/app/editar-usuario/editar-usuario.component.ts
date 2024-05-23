import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from '../model/tipo-usuario';
import { Usuario } from '../model/usuario';

import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { TipoUsuarioService } from '../service/tipo-usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Usuario = { id: 0, nombre: '', apellido: '', email: '', usuario: '', password: '', tipoUsuario_ID: 0 };
  errorActualizacion: string = '';
  tipoUsuario: TipoUsuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private tipoUsuarioService: TipoUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.usuarioService.buscar(id).subscribe(
          usuario => {
            this.usuario = usuario;
          },
          error => {
            console.error('Error al obtener el usuario:', error);
          }
        );
        this.cargarTipoUsuario();
      }
    });
  }

  cargarTipoUsuario(): void {
    this.tipoUsuarioService.lista().subscribe(
      (data: TipoUsuario[]) => {
        this.tipoUsuario = data;
      },
      error => {
        console.error('Error al cargar los géneros', error);
      }
    );
  }

  actualizarUsuario(): void {
    this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(
      response => {
        console.log('Usuario actualizado correctamente:', response);
        this.router.navigate(['/usuarios']);
      },
      error => {
        console.error('Error al actualizar la película:', error);
        this.errorActualizacion = 'Error al actualizar la película. Intente nuevamente.';
      }
    );
  }

  regresar(): void {
    this.router.navigate(['/usuarios']);
  }
}