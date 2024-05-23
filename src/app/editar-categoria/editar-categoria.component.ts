import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service'; // Asegúrate de tener este servicio
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  categoria: Categoria = { idcategoria: 0, nombre: '' };
  errorActualizacion: string = '';

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.categoriaService.buscar(id).subscribe(
          categoria => {
            this.categoria = categoria;
          },
          error => {
            console.error('Error al obtener la categoría:', error);
          }
        );
      }
    });
  }

  actualizarCategoria(): void {
    if (!this.categoria.nombre) {
      this.errorActualizacion = 'Por favor complete todos los campos del formulario.';
      return;
    }

    this.categoriaService.actualizarCategoria(this.categoria.idcategoria, this.categoria).subscribe(
      response => {
        console.log('Categoría actualizada correctamente:', response);
        this.router.navigate(['/categorias']);
      },
      error => {
        console.error('Error al actualizar la categoría:', error);
        this.errorActualizacion = 'Error al actualizar la categoría. Intente nuevamente.';
      }
    );
  }

  regresar(): void {
    this.router.navigate(['/categorias']);
  }
}
