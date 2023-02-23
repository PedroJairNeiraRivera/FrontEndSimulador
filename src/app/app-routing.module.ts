import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { AuthGuard } from './seguridad/auth.guard';
import { LoginComponent } from './login/login.component';
import { OrdinarioComponent } from './simulador/ordinario/ordinario.component';
import { ExtraordinarioComponent } from './simulador/extraordinario/extraordinario.component';
import { VentanillaComponent } from './simulador/ventanilla/ventanilla.component';
import { DialogEditPerfilComponent } from './usuario/dialog-edit-perfil/dialog-edit-perfil.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full',},
  {path: 'home', component:HomeComponent,  canActivate: [AuthGuard] },
  {path: 'usuario', component:UsuarioComponent,canActivate:[AuthGuard]},
  {path: 'crearUsuario', component:CrearUsuarioComponent, canActivate: [AuthGuard] },
  {path: 'simulador', component: SimuladorComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path:'ordinario', component: OrdinarioComponent,canActivate:[AuthGuard]},
  {path:'extraordinario', component:ExtraordinarioComponent,canActivate:[AuthGuard]},
  {path:'ventanilla', component:VentanillaComponent,canActivate:[AuthGuard]},
  {path:'menuTipoUsuario', component:DialogEditPerfilComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
