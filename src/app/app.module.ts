import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LacartaComponent } from './lacarta/lacarta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuestroslocalesComponent } from './nuestroslocales/nuestroslocales.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriaMenuComponent } from './categoria-menu/categoria-menu.component';
import { LocalesComponent } from './locales/locales.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { EditarMenuComponent } from './editar-menu/editar-menu.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { RegistrarUsuarioAdminComponent } from './registrar-usuario-admin/registrar-usuario-admin.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { EditarLocalesComponent } from './editar-locales/editar-locales.component';
import { RegistrarReservaAdminComponent } from './registrar-reserva-admin/registrar-reserva-admin.component';
import { RegistrarLocalesComponent } from './registrar-locales/registrar-locales.component';
import { DetalleMenuComponent } from './detalle-menu/detalle-menu.component';
import { DetalleReservaComponent } from './detalle-reserva/detalle-reserva.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { RegistrarCategoriaAdminComponent } from './registrar-categoria-admin/registrar-categoria-admin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LacartaComponent,
    NavbarComponent,
    NosotrosComponent,
    NuestroslocalesComponent,
    ReservasComponent,
    RegistrarUsuarioComponent,
    LoginComponent,
    NavbarAdminComponent,
    HomeAdminComponent,
    UsuariosComponent,
    MenuComponent,
    CategoriaMenuComponent,
    LocalesComponent,
    ReservaComponent,
    RegistrarMenuComponent,
    EditarMenuComponent,
    EditarUsuarioComponent,
    RegistrarUsuarioAdminComponent,
    EditarReservaComponent,
    EditarLocalesComponent,
    RegistrarReservaAdminComponent,
    RegistrarLocalesComponent,
    DetalleMenuComponent,
    DetalleReservaComponent,
    EditarCategoriaComponent,
    RegistrarCategoriaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
