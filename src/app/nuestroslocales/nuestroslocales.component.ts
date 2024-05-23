import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../service/locales.service';
import { Locales } from '../model/locales';
import { DistritoService } from '../service/distrito.service';
import { Distrito } from '../model/distrito';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuestroslocales',
  templateUrl: './nuestroslocales.component.html',
  styleUrl: './nuestroslocales.component.css'
})
export class NuestroslocalesComponent implements OnInit{

  locales: Locales[] = [];
  distrito: Distrito[] = [];

  constructor(
    private localesService: LocalesService,
    private distritoService: DistritoService,
    private router: Router
  ){ }

  ngOnInit():void {
    this.localesService.lista().subscribe(data => {
      this.locales = data;
    });

    this.distritoService.lista().subscribe(data =>{
      this.distrito = data;
    })
    }

    getNombreDistrito(iddistrito: number): string {
      const distrito = this.distrito.find(tip => tip.iddistrito === iddistrito);
      return distrito ? distrito.nombre : 'Desconocido';
    }


  
 }
 
