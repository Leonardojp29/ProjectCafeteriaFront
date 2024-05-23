import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LacartaComponent } from './lacarta/lacarta.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuestroslocalesComponent } from './nuestroslocales/nuestroslocales.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LocalesComponent } from './locales/locales.component';
import { EditarMenuComponent } from './editar-menu/editar-menu.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { RegistrarUsuarioAdminComponent } from './registrar-usuario-admin/registrar-usuario-admin.component';
import { RegistrarLocalesComponent } from './registrar-locales/registrar-locales.component';
import { RegistrarReservaAdminComponent } from './registrar-reserva-admin/registrar-reserva-admin.component';
import { EditarLocalesComponent } from './editar-locales/editar-locales.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { DetalleReservaComponent } from './detalle-reserva/detalle-reserva.component';
import { DetalleMenuComponent } from './detalle-menu/detalle-menu.component';
import { CategoriaMenuComponent } from './categoria-menu/categoria-menu.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { RegistrarCategoriaAdminComponent } from './registrar-categoria-admin/registrar-categoria-admin.component';

const routes: Routes = [
  //usuario
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent},
  {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'lacarta', component: LacartaComponent, canActivate: [AuthGuard]},
  {path: 'nosotros', component: NosotrosComponent, canActivate: [AuthGuard]},
  {path: 'nuestroslocales', component: NuestroslocalesComponent, canActivate: [AuthGuard]},
  {path: 'reservas', component: ReservasComponent, canActivate: [AuthGuard]},
  //admin:
  {path: 'home-admin', component:HomeAdminComponent, canActivate: [AuthGuard]},
  //admin listados:
  {path: 'reserva', component:ReservaComponent, canActivate: [AuthGuard]},
  {path: 'menu', component:MenuComponent, canActivate: [AuthGuard]},
  {path: 'locales', component:LocalesComponent, canActivate: [AuthGuard]},
  {path: 'usuarios', component:UsuariosComponent, canActivate: [AuthGuard]},
  {path: 'categorias', component:CategoriaMenuComponent, canActivate: [AuthGuard]},
  //admin registrar:
  {path: 'registrar-usuario-admin', component:RegistrarUsuarioAdminComponent, canActivate: [AuthGuard]},
  {path: 'registrar-categoria-admin', component:RegistrarCategoriaAdminComponent, canActivate: [AuthGuard]},
  {path: 'registrar-menu', component:RegistrarMenuComponent, canActivate: [AuthGuard]},
  {path: 'registrar-locales', component:RegistrarLocalesComponent, canActivate: [AuthGuard]},
  {path: 'registrar-reserva-admin', component:RegistrarReservaAdminComponent, canActivate: [AuthGuard]},
  //admin edits:
  {path: 'editar-menu/:id', component:EditarMenuComponent, canActivate: [AuthGuard]},  
  {path: 'editar-usuario/:id', component:EditarUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'editar-locales/:id', component:EditarLocalesComponent, canActivate: [AuthGuard]},
  {path: 'editar-reserva/:id', component:EditarReservaComponent, canActivate: [AuthGuard]},
  {path: 'editar-categoria/:id', component:EditarCategoriaComponent, canActivate: [AuthGuard]},
  //admin detalle:
  {path: 'detalle-reserva/:id', component:DetalleReservaComponent, canActivate: [AuthGuard]},
  {path: 'detalle-menu/:id', component:DetalleMenuComponent, canActivate: [AuthGuard]},


  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
