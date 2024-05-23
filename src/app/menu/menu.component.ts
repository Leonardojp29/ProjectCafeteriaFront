import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Menu } from '../model/menu';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  menus: Menu[] = [];
  categorias: Categoria[] = [];
  dataSource = new MatTableDataSource<Menu>(this.menus);
  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'precio', 'descripcion', 'imagen', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private menuService: MenuService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuService.lista().subscribe(data =>  {
      this.menus = data;
      this.dataSource.data = this.menus;
      this.dataSource.paginator = this.paginator;

      this.dataSource.filterPredicate = (data: Menu, filter: string) => {
        const normalizedFilter = this.normalize(filter);
        const normalizedName = this.normalize(data.nombre);
        return normalizedName.includes(normalizedFilter);
      };
    });

    this.categoriaService.lista().subscribe(data => {
      this.categorias = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getNombreCategoria(idcategoria: number): string {
    const categoria = this.categorias.find(cat => cat.idcategoria === idcategoria);
    return categoria ? categoria.nombre : 'Desconocido';
  }

  irActualizar(id: number): void {
    this.router.navigate(['/editar-menu', id]);
  }

  eliminarMenu(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta producto del menú?')) {
      this.menuService.eliminar(id).subscribe(() => {
        this.actualizarLista();
      });
    }
  }

  detalleMenu(id: number): void {
    this.router.navigate(['/detalle-menu', id]);
  }

  actualizarLista() {
    this.menuService.lista().subscribe(data => {
      this.menus = data;
      this.dataSource.data = this.menus;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private normalize(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
}
