import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { DialogDeleteComponent } from './comun/delete/dialogdelete.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { JwtInterceptor } from './seguridad/jwt.interceptor';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { OrdinarioComponent } from './simulador/ordinario/ordinario.component';
import { ExtraordinarioComponent } from './simulador/extraordinario/extraordinario.component';
import { VentanillaComponent } from './simulador/ventanilla/ventanilla.component';
import { DialogEditPerfilComponent } from './usuario/dialog-edit-perfil/dialog-edit-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    CrearUsuarioComponent,
    SimuladorComponent,
    DialogDeleteComponent,
    LoginComponent,
    OrdinarioComponent,
    ExtraordinarioComponent,
    VentanillaComponent,
    DialogEditPerfilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,

    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
