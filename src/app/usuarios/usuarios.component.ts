import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { TipoUsuario } from '../model/tipo-usuario';
import { TipoUsuarioService } from '../service/tipo-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  tipoUsuarios: TipoUsuario[] = [];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'usuario', 'tipoUsuario', 'acciones'];
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private usuarioService: UsuarioService,
    private tipoUsuarioService: TipoUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioService.lista().subscribe(data => {
      this.usuarios = data;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
        const normalizedFilter = this.normalize(filter);
        const normalizedName = this.normalize(data.nombre);
        return normalizedName.includes(normalizedFilter);
      };
    });

    this.tipoUsuarioService.lista().subscribe(data => {
      this.tipoUsuarios = data;
    });
  }

  getNombreTipoUsuario(id: number): string {
    const tipoUsuario = this.tipoUsuarios.find(tip => tip.id === id);
    return tipoUsuario ? tipoUsuario.tipo : 'Desconocido';
  }

  irActualizar(id: number): void {
    this.router.navigate(['/editar-usuario', id]);
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.eliminar(id).subscribe(() => {
        this.actualizarLista();
      });
    }
  }

  actualizarLista() {
    this.usuarioService.lista().subscribe(data => {
      this.usuarios = data;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
      this.dataSource.paginator = this.paginator;
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
