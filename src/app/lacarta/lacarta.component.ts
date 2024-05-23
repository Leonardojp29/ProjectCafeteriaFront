import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Menu } from '../model/menu';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lacarta',
  templateUrl: './lacarta.component.html',
  styleUrls: ['./lacarta.component.css']
})
export class LacartaComponent implements OnInit {
  menus: Menu[] = [];
  categorias: Categoria[] = [];
  menusByCategory: { [key: number]: Menu[] } = {};

  constructor(
    private menuService: MenuService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuService.lista().subscribe(data => {
      this.menus = data;
      this.categorizeMenus();
    });

    this.categoriaService.lista().subscribe(data => {
      this.categorias = data;
      this.categorizeMenus();
    });
  }

  categorizeMenus(): void {
    if (this.menus.length && this.categorias.length) {
      this.menusByCategory = {};
      this.categorias.forEach(categoria => {
        this.menusByCategory[categoria.idcategoria] = this.menus.filter(menu => menu.idcategoria === categoria.idcategoria);
      });
    }
  }

  getNombreCategoria(idcategoria: number): string {
    const categoria = this.categorias.find(cat => cat.idcategoria === idcategoria);
    return categoria ? categoria.nombre : 'Desconocido';
  }
}
