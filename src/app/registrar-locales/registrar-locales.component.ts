import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Locales } from '../model/locales';
import { Distrito } from '../model/distrito';
import { LocalesService } from '../service/locales.service';
import { DistritoService } from '../service/distrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-locales',
  templateUrl: './registrar-locales.component.html',
  styleUrl: './registrar-locales.component.css'
})
export class RegistrarLocalesComponent implements OnInit{
  distrito: Distrito[]=[];
  nuevoLocales: Locales = {
    id: 0,
    iddistrito: 0,
    direccion: '',
    horario: ''
  };
  mensajeConfirmacion: string = ''; 
  mensajeError: string = ''; 

  constructor(
    private localesService: LocalesService,
    private distritoService: DistritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDistritos();
  }

  cargarDistritos(): void {
    this.distritoService.lista().subscribe(
      (data: Distrito[]) => {
        this.distrito = data;
      },
      error => {
        console.error('Error al cargar los distritos', error);
      }
    );
  }

  registrarLocales(): void{
    if (
      !this.nuevoLocales.iddistrito ||
      !this.nuevoLocales.direccion ||
      !this.nuevoLocales.horario 
    ) {
      this.mensajeError = 'Por favor complete todos los campos del formulario.';
      return; 
    }

    this.localesService.registrar(this.nuevoLocales)
      .subscribe(
        (response: any) => {
          console.log('Local registrado con éxito: ', response);
          this.mensajeConfirmacion = 'Local registrado correctamente';
          this.mensajeError = '';
          this.nuevoLocales = {
            id: 0,
            iddistrito: 0,
            direccion: '',
            horario: ''
          };
          setTimeout(() => {
            this.router.navigate(['/locales']);
          }, 3000); 
        },
        (error: any) => {
          console.error('Error al registrar el local: ', error);
        }
      );      
  }
  regresar(): void {
    this.router.navigate(['/locales']); 
  }
}