import { Component } from '@angular/core';
import { Reserva } from '../model/reserva';
import { ReservaService } from '../service/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-reserva-admin',
  templateUrl: './registrar-reserva-admin.component.html',
  styleUrl: './registrar-reserva-admin.component.css'
})
export class RegistrarReservaAdminComponent {
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
  mensajeConfirmacion: string = ''; 
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
          this.mensajeConfirmacion = 'Reserva registrada correctamente'; // Mostrar mensaje de confirmación
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
            this.router.navigate(['/reserva']);
          }, 3000); // Redirigir después de 3 segundos
        },
        (error: any) => {
          console.error('Error al registrar su reserva: ', error);
        }
      );      
  }
  regresar(): void {
    this.router.navigate(['/reserva']); 
  }
}