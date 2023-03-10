import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/usuario';
import { ApiusuarioService } from 'src/app/servicios/apiusuario.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-dialog-edit-perfil',
  templateUrl: './dialog-edit-perfil.component.html',
  styleUrls: ['./dialog-edit-perfil.component.scss']
})
export class DialogEditPerfilComponent {
  public nombres: string;
  public celular: number;
  public direccion: string;
  public sexo: string;
  public email: string;
  public fechaNacimiento: Date;
  public tipoAsociacion: string;
  public password: string;
  public idUsuario: number;
  public token: string;



  constructor(
    public dialogRef: MatDialogRef<CrearUsuarioComponent>,
    public apiUsuario: ApiusuarioService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario

  ) {
    if (this.usuario !== null) {
      this.idUsuario = usuario.idUsuario,
        this.nombres = usuario.nombres,
        this.celular = usuario.celular,
        this.direccion = usuario.direccion,
        this.sexo = usuario.sexo,
        this.email = usuario.email,
        this.fechaNacimiento = usuario.fechaNacimiento,
        this.tipoAsociacion = usuario.tipoAsociacion,
        this.password = usuario.password,
        this.token = usuario.token
    }
  }
  close() {
    this.dialogRef.close();
  }
  editUsuario() {
    const usuario: Usuario = {
      nombres: this.nombres,
      celular: this.celular,
      direccion: this.direccion,
      sexo: this.sexo,
      email: this.email,
      fechaNacimiento: this.fechaNacimiento,
      tipoAsociacion: this.tipoAsociacion,
      password: CryptoJS.SHA256(this.password).toString(),
      token: this.token,
      idUsuario: this.idUsuario
    };

    this.apiUsuario.edit(usuario).subscribe(response => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Contras??ea editado con exito', '', {
          duration: 2000
        });
      }
    });
  }
  
}
