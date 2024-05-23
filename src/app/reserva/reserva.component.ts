import { Component, OnInit, ViewChild } from '@angular/core';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../service/reserva.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservas: Reserva[] = [];
  dataSource = new MatTableDataSource<Reserva>(this.reservas);
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'telefono', 'cantidad', 'fecha', 'hora', 'mensaje', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reservaService.lista().subscribe(data =>  {
      this.reservas = data;
      this.dataSource.data = this.reservas;
      this.dataSource.paginator = this.paginator;

      this.dataSource.filterPredicate = (data: Reserva, filter: string) => {
        const normalizedFilter = this.normalize(filter);
        const normalizedName = this.normalize(data.nombre);
        return normalizedName.includes(normalizedFilter);
      };
    });
  }

  irActualizar(id: number): void {
    this.router.navigate(['/editar-reserva', id]);
  }

  eliminarReserva(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta reserva?')) {
      this.reservaService.eliminar(id).subscribe(() => {
        this.actualizarLista();
      });
    }
  }

  detalleReserva(id: number): void {
    this.router.navigate(['/detalle-reserva', id]);
  }

  actualizarLista() {
    this.reservaService.lista().subscribe(data =>  {
      this.reservas = data;
      this.dataSource.data = this.reservas;
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
