import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-categoria-admin',
  templateUrl: './registrar-categoria-admin.component.html',
  styleUrls: ['./registrar-categoria-admin.component.css']
})
export class RegistrarCategoriaAdminComponent {
  nuevaCategoria: Categoria = {
    idcategoria: 0,
    nombre: ''
  };
  mensajeConfirmacion: string = '';
  mensajeError: string = '';

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  registrarCategoria() {
    if (!this.nuevaCategoria.nombre) {
      this.mensajeError = 'Por favor complete todos los campos del formulario.';
      return;
    }

    this.categoriaService.registrar(this.nuevaCategoria)
      .subscribe(
        (response: any) => {
          console.log('Categoría registrada con éxito: ', response);
          this.mensajeConfirmacion = 'Categoría registrada correctamente';
          this.mensajeError = '';
          this.nuevaCategoria = {
            idcategoria: 0,
            nombre: ''
          };
          setTimeout(() => {
            this.router.navigate(['/categorias']);
          }, 3000);
        },
        (error: any) => {
          console.error('Error al registrar la categoría: ', error);
          this.mensajeError = 'Ocurrió un error al registrar la categoría. Intente de nuevo más tarde.';
        }
      );
  }

  regresar(): void {
    this.router.navigate(['/categorias']);
  }
}
