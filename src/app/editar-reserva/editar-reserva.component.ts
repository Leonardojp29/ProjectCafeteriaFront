import { Component, OnInit } from '@angular/core';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../service/reserva.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrl: './editar-reserva.component.css'
})
export class EditarReservaComponent implements OnInit {
  reserva: Reserva = {  id: 0, nombre: '', correo: '', telefono: '',cantidad: 0 , fecha: '',hora: '',mensaje: '' };
  errorActualizacion: string = '';

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.reservaService.buscar(id).subscribe(
          reserva => {
            this.reserva = reserva;
          },
          error => {
            console.error('Error al obtener la reserva:', error);
          }
        );
      }
    });
  }

  actualizarReserva(): void {
    this.reservaService.actualizarReserva(this.reserva.id, this.reserva).subscribe(
      response => {
        console.log('Reserva actualizado correctamente:', response);
        this.router.navigate(['/reserva']);
      },
      error => {
        console.error('Error al actualizar la reserva:', error);
        this.errorActualizacion = 'Error al actualizar la reserva. Intente nuevamente.';
      }
    );
  }

  regresar(): void {
    this.router.navigate(['menu']);
  }
}
