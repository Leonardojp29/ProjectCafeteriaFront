import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-editar-menu',
  templateUrl: './editar-menu.component.html',
  styleUrls: ['./editar-menu.component.css']
})
export class EditarMenuComponent implements OnInit {
  menu: Menu = { id: 0, nombre: '', idcategoria: 0, precio: 0, descripcion: '', imagen: '' };
  errorActualizacion: string = '';
  categoria: Categoria[] = [];
  selectedFile: File | null = null;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.menuService.buscar(id).subscribe(
          menu => {
            this.menu = menu;
          },
          error => {
            console.error('Error al obtener el menu:', error);
          }
        );
        this.cargarCategorias();
      }
    });
  }

  cargarCategorias(): void {
    this.categoriaService.lista().subscribe(
      (data: Categoria[]) => {
        this.categoria = data;
      },
      error => {
        console.error('Error al cargar las categorias', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  actualizarMenu(): void {
    if (this.selectedFile) {
      this.menuService.uploadImage(this.selectedFile).subscribe(
        (response: any) => {
          this.menu.imagen = response;
          this.actualizarMenuData();
        },
        error => {
          console.error('Error al cargar la imagen:', error);
          this.errorActualizacion = 'Error al cargar la imagen.';
        }
      );
    } else {
      this.actualizarMenuData();
    }
  }

  actualizarMenuData(): void {
    this.menuService.actualizarMenu(this.menu.id, this.menu).subscribe(
      response => {
        console.log('Menu actualizado correctamente:', response);
        this.router.navigate(['/menu']);
      },
      error => {
        console.error('Error al actualizar el menu:', error);
        this.errorActualizacion = 'Error al actualizar el menu. Intente nuevamente.';
      }
    );
  }

  regresar(): void {
    this.router.navigate(['menu']);
  }
}
