import { Component } from '@angular/core';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../service/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  nuevoReserva: Reserva = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    cantidad: 0,
    fecha: '',
    hora: '',
    mensaje: ''
  };
  mensajeConfirmacion: string = ''; // Propiedad para el mensaje de confirmación
  mensajeError: string = ''; // Propiedad para el mensaje de error

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) {}

  registrarReserva() {
    // Validar si los campos obligatorios están vacíos
    if (
      !this.nuevoReserva.nombre ||
      !this.nuevoReserva.correo ||
      !this.nuevoReserva.telefono ||
      !this.nuevoReserva.cantidad ||
      !this.nuevoReserva.fecha ||
      !this.nuevoReserva.hora
    ) {
      this.mensajeError = 'Por favor complete todos los campos del formulario.';
      return; // Detener la ejecución si hay campos vacíos
    }

    this.reservaService.registrar(this.nuevoReserva)
      .subscribe(
        (response: any) => {
          console.log('Reserva registrada con éxito: ', response);
          this.mensajeConfirmacion = 'Reserva enviada correctamente'; // Mostrar mensaje de confirmación
          this.mensajeError = ''; // Limpiar mensaje de error
          this.nuevoReserva = {
            id: 0,
            nombre: '',
            correo: '',
            telefono: '',
            cantidad: 0,
            fecha: '',
            hora: '',
            mensaje: ''
          };
          // Opcional: redirigir después de cierto tiempo
          setTimeout(() => {
            this.router.navigate(['/reservas']);
          }, 3000); // Redirigir después de 3 segundos
        },
        (error: any) => {
          console.error('Error al registrar su reserva: ', error);
        }
      );
  }
}
