import { Component, OnInit } from '@angular/core';
import { Locales } from '../model/locales';
import { LocalesService } from '../service/locales.service';

import { Distrito } from '../model/distrito';
import { DistritoService } from '../service/distrito.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-locales',
  templateUrl: './editar-locales.component.html',
  styleUrl: './editar-locales.component.css'
})
export class EditarLocalesComponent implements OnInit {
  locales: Locales = { id: 0, iddistrito: 0, direccion: '', horario: '' };
  errorActualizacion: string = '';
  distrito: Distrito[]=[];

  constructor(
    private localesService: LocalesService,
    private route: ActivatedRoute,
    private distritoService: DistritoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.localesService.buscar(id).subscribe(
          locales => {
            this.locales = locales;
          },
          error => {
            console.error('Error al obtener el local:', error);
          }
        );
        this.cargarDistrito();
      }
    });
  }
  cargarDistrito(): void {
    this.distritoService.lista().subscribe(
      (data: Distrito[]) => {
        this.distrito = data;
      },
      error => {
        console.error('Error al cargar los distritos', error);
      }
    );
  }

  actualizarLocales(): void {
    this.localesService.actualizarLocales(this.locales.id, this.locales).subscribe(
      response => {
        console.log('Local actualizado correctamente:', response);
        this.router.navigate(['/locales']);
      },
      error => {
        console.error('Error al actualizar el local:', error);
        this.errorActualizacion = 'Error al actualizar el local. Intente nuevamente.';
      }
    );
  }

  regresar(): void {
    this.router.navigate(['locales']);
  }
}
