import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Locales } from '../model/locales';
import { LocalesService } from '../service/locales.service';
import { Distrito } from '../model/distrito';
import { DistritoService } from '../service/distrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {
  locales: Locales[] = [];
  distritos: Distrito[]=[];
  dataSource = new MatTableDataSource<Locales>(this.locales);
  displayedColumns: string[] = ['id', 'distrito', 'direccion', 'horario', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private localesService: LocalesService,
    private distritoService: DistritoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Primero cargar los distritos
    this.distritoService.lista().subscribe(data => {
      this.distritos = data;
  
      // Una vez que se han cargado los distritos, cargar los locales
      this.localesService.lista().subscribe(data => {
        this.locales = data;
        this.dataSource = new MatTableDataSource<Locales>(this.locales);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
  

  getNombreDistrito(iddistrito: number): string {
    if (this.distritos.length === 0) {
      // Si la lista de distritos está vacía, retorna una cadena vacía o un valor predeterminado
      return '';
    } else {
      const distrito = this.distritos.find(nom => nom.iddistrito === iddistrito);
      return distrito ? distrito.nombre : 'Desconocido';
    }
  }
  
  
  irActualizar(id: number): void {
    this.router.navigate(['/editar-locales', id]);
  }

  eliminarLocales(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta local?')) {
      this.localesService.eliminar(id).subscribe(() => {
        this.actualizarLista();
      });
    }
  }

  actualizarLista() {
    this.localesService.lista().subscribe(data => {
      this.locales = data;
      this.dataSource = new MatTableDataSource<Locales>(this.locales);
      this.dataSource.paginator = this.paginator;
    });
  }
}