import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-registrar-menu',
  templateUrl: './registrar-menu.component.html',
  styleUrls: ['./registrar-menu.component.css']
})
export class RegistrarMenuComponent implements OnInit {
  categoria: Categoria[] = [];
  nuevoMenu: Menu = {
    id: 0,
    nombre: '',
    idcategoria: 0,
    precio: 0,
    descripcion: '',
    imagen: ''
  };
  errorRegistro: string = '';
  selectedFile: File | null = null;

  constructor(
    private menuService: MenuService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
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

  registrarMenu(): void {
    if (this.camposValidos()) {
      this.errorRegistro = '';
      if (this.selectedFile) {
        this.menuService.uploadImage(this.selectedFile).subscribe(
          (response: any) => {
            // Ahora response es directamente la URL de la imagen
            this.nuevoMenu.imagen = response;
            this.registrarMenuData();
          },
          error => {
            console.error('Error al cargar la imagen:', error);
            this.errorRegistro = 'Error al cargar la imagen.';
          }
        );
      } else {
        this.registrarMenuData();
      }
    } else {
      this.errorRegistro = 'Por favor complete todos los campos.';
    }
  }

  registrarMenuData(): void {
    this.menuService.registrar(this.nuevoMenu).subscribe(
      response => {
        console.log('Menu registrado con éxito:', response);
        this.nuevoMenu = {
          id: 0,
          nombre: '',
          idcategoria: 0,
          precio: 0,
          descripcion: '',
          imagen: ''
        };
        this.router.navigate(['/menu']);
      },
      error => {
        console.error('Error al registrar el menu:', error);
      }
    );
  }

  camposValidos(): boolean {
    return (
      this.nuevoMenu.nombre.trim() !== '' &&
      this.nuevoMenu.idcategoria !== 0 &&
      this.nuevoMenu.precio !== 0
    );
  }

  regresar(): void {
    this.router.navigate(['/menu']); 
  }

  irACategorias() {
    this.router.navigate(['/categorias']);
  }
}
