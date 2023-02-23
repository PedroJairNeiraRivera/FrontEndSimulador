import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';
import { ApiauthService } from './servicios/apiauth.service';
import { ApiusuarioService } from './servicios/apiusuario.service';
import { DialogEditPerfilComponent } from './usuario/dialog-edit-perfil/dialog-edit-perfil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lst:any[];
  title = 'app';
  usuario: Usuario;
  obj: any;
  tipo: string | '';


  constructor(public apiauthService: ApiauthService, private router: Router, private apiUsuario: ApiusuarioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {

    
    this.apiauthService.usuario.subscribe(res => {
      this.usuario = res;
      console.log('cambio el objeto' + res);
      this.login();
    });
  }

  login() {
    this.obj = this.apiauthService.usuarioData;
    this.tipo = JSON.stringify(this.obj.tipo);
    this.tipo = this.tipo.replace(/ /g, "");
    this.tipo = this.tipo.replace(/"/g, "");

    this.rol(this.tipo);
  }
  logout() {
    this.apiauthService.logout();
    this.router.navigate(['/login']);
    this.tipo = null;
  }

  rol(string: string) {
    if (string == 'Admin') {
      this.tipo = 'Admin';
    } else {
      this.tipo = 'User';
    }
  }


  openEdit(usuario: Usuario) {

    const dialogRef = this.dialog.open(DialogEditPerfilComponent, {
      width: '300',
      data: usuario
    });

  }

}
