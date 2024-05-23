import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-detalle-menu',
  templateUrl: './detalle-menu.component.html',
  styleUrls: ['./detalle-menu.component.css']
})
export class DetalleMenuComponent implements OnInit {
  menu: Menu | undefined;
  categoria: string | undefined;
  imagenUrl: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private router: Router,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.menuService.buscar(id).subscribe(data => {
        this.menu = data;
        if (this.menu) {
          this.categoriaService.buscar(this.menu.idcategoria).subscribe(cat => {
            this.categoria = cat.nombre;
          });
          this.imagenUrl = this.menu.imagen; // Asignamos la URL de la imagen
        }
      });
    }
  }

  back(): void {
    this.router.navigate(['/menu']);
  }
}
