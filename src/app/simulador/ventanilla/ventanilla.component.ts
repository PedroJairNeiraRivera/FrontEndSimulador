import { Component } from '@angular/core';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.scss']
})
export class VentanillaComponent {
  posicion: number;
  fecha: Date;
  fdoSolidaridad: number;
  seguro: number;
  capital: number;
  valorCredito: number;
  cuotas: number;
  tasaInteres: number = 0.011;
  valorInteres: number;
  valorCuotaMensual: number;
  saldo: number;
  datasource: any;

  public lst: any[] = [];
  public columnas: string[] = ['Cuota', 'Fecha', 'FdoSolidaridad', 'Seguro', 'Interes', 'Capital', 'Valor', 'Saldo'];

  llamarMetodos() {
    this.validarValorCredito();
    this.calcularFDO();
    this.calcularSeguro();
    this.calculadorCuota();
    this.llenarTabla();
    this.lst = [];

  }
  llenarTabla() {
    this.fecha = new Date();
    var saldo: number = this.valorCredito;
    var vCapital: number = this.capital;
    var vInteres: number = this.valorInteres;


    for (let index = 1; index <= this.cuotas; index++) {

      vInteres = Math.round(this.calculadorInteres(saldo, this.tasaInteres));
      vCapital = this.calcularCapital(this.valorCuotaMensual, vInteres, this.fdoSolidaridad, this.seguro);
      saldo = saldo - vCapital;

      this.lst.push({ Cuota: index, Fecha: this.fecha.getDate() + 30, FdoSolidaridad: this.fdoSolidaridad, Seguro: this.seguro, Interes: vInteres, Capital: vCapital, Valor: this.valorCuotaMensual, Saldo: saldo });
      this.datasource =this.lst;
    }
    console.log(this.lst);

  }

  validarValorCredito() {
    if (this.valorCredito >= 1 && this.valorCredito <= 30000000) {

    } else {
 
      alert("valor de Credito invalido");
    }
  }


  calculadorInteres(valor: number, interes: number): number {

    return this.valorInteres = valor * interes;
  }

  calcularFDO() {
    this.fdoSolidaridad = Math.round((this.valorCredito * 0.01) / this.cuotas);
  }
  calcularSeguro() {
    this.seguro = Math.round((this.valorCredito * 0.02) / this.cuotas);
  }
  calculadorCuota() {
    this.valorCuotaMensual = Math.round(this.fdoSolidaridad + this.seguro + (this.tasaInteres * this.valorCredito) / (1 - (1 + this.tasaInteres) ** (-this.cuotas)));

  }
  calcularCapital(valorcuota: number, interes: number, solidaridad: number, seguro: number): number {

    return this.capital = valorcuota - interes - solidaridad - seguro;
  }
}
