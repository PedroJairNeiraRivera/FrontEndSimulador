
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordinario',
  templateUrl: './ordinario.component.html',
  styleUrls: ['./ordinario.component.scss']
})
export class OrdinarioComponent {
  posicion: number;
  fecha: Date;
  fdoSolidaridad: number;
  seguro: number;
  capital: number;
  valorCredito: number;
  cuotas: number;
  tasaInteres: number;
  valorInteres: number;
  valorCuotaMensual: number;
  saldo: number;
  datasource:any;

  public lst: any[] = [];
  public columnas: string[] = ['Cuota', 'Fecha', 'FdoSolidaridad', 'Seguro', 'Interes', 'Capital', 'Valor', 'Saldo'];

  llamarMetodos() {
    this.calculadorTasa();
    this.calcularFDO();
    this.calcularSeguro();
    this.calculadorCuota();
    this.llenarTabla();
    this.lst=[];

  }
  llenarTabla() {
    this.fecha = new Date();
      var saldo: number= this.valorCredito;
      var vCapital: number = this.capital;
      var vInteres: number = this.valorInteres;
      

    for (let index = 1; index <= this.cuotas; index++) {

      vInteres = Math.round(this.calculadorInteres(saldo, this.tasaInteres));
      vCapital = this.calcularCapital(this.valorCuotaMensual, vInteres, this.fdoSolidaridad, this.seguro);
      saldo = saldo - vCapital;

      this.lst.push({ Cuota: index, Fecha: this.fecha.getDate()+30, FdoSolidaridad: this.fdoSolidaridad, Seguro: this.seguro, Interes: vInteres, Capital: vCapital, Valor: this.valorCuotaMensual, Saldo: saldo });
      this.datasource =this.lst;
    }
    console.log(this.lst);

  }

  calculadorTasa() {

    if (this.cuotas >= 1 && this.cuotas <= 12) {
      this.tasaInteres = 0.008;
    } else if (this.cuotas > 12 && this.cuotas <= 72) {
      this.tasaInteres = 0.01;
    } else {
      console.log("numero de cuotas invalidas");
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
