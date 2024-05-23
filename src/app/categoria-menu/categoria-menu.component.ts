import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categoria-menu',
  templateUrl: './categoria-menu.component.html',
  styleUrl: './categoria-menu.component.css'
})
export class CategoriaMenuComponent implements OnInit {
  categorias: Categoria[] = [];
  dataSource = new MatTableDataSource<Categoria>(this.categorias);
  displayedColumns: string[] = ['idcategoria', 'nombre', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriaService.lista().subscribe(data =>  {
      this.categorias = data;
      this.dataSource.data = this.categorias;
      this.dataSource.paginator = this.paginator;
    });
  }

  irActualizar(idcategoria: number): void {
    this.router.navigate(['/editar-categoria', idcategoria]);
  }

  eliminarCategoria(idcategoria: number): void {
    if (confirm('¿Estás seguro de eliminar esta categoria?')) {
      this.categoriaService.eliminar(idcategoria).subscribe(() => {
        this.actualizarLista();
      });
    }
  }

  actualizarLista() {
    this.categoriaService.lista().subscribe(data =>  {
      this.categorias = data;
      this.dataSource.data = this.categorias;
    });
  }
}
