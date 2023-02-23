import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ApiusuarioService } from '../servicios/apiusuario.service';
import { Response } from '../models/response';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '../models/usuario';
import { DialogDeleteComponent } from '../comun/delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public lst: any[];
public columnas: string[] = ['idUsuario', 'nombres', 'celular', 'direccion', 'sexo', 'email', 'fechaNacimiento', 'tipoAsociacion', 'acciones'];

  constructor(
    private apiUsuario: ApiusuarioService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this.apiUsuario.getUsuarios().subscribe(response => {
      this.lst = response.data;
    })

  }

  openAdd() {
    const dialogRef = this.dialog.open(CrearUsuarioComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuario();
    });

  }
  openEdit(usuario: Usuario) {

    const dialogRef = this.dialog.open(CrearUsuarioComponent, {
      width: '300',
      data: usuario
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuario();
    });

  }

  delete(usuario: Usuario) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiUsuario.delete(usuario.idUsuario).subscribe(response=>{
          if(response.exito===1){
            this.snackBar.open('Usuario Eliminado con exito','',{
              duration:2000
            });
            this.getUsuario();
          }
        });
      }
    });
  }
}
