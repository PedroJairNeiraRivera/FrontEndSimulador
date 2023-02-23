import { Component } from '@angular/core';

@Component({
  selector: 'app-extraordinario',
  templateUrl: './extraordinario.component.html',
  styleUrls: ['./extraordinario.component.scss']
})
export class ExtraordinarioComponent {
  activar: boolean;
  posicion: number;
  fecha: Date;
  seguro: number;
  capital: number = 100000;
  valorCredito: number;
  cuotas: number;
  tasaInteres: number = 0.014;
  valorInteres: number;
  valorCuotaMensual: number;
  saldo: number;
  datasource: any;

  public lst: any[] = [];
  public columnas: string[] = ['Cuota', 'Fecha', 'Seguro', 'Interes', 'Capital', 'Valor', 'Saldo'];


  llamarMetodos() {
    this.validarValorCredito();
    this.calcularSeguro();
    this.llenarTabla();
    this.lst = [];

  }

  llenarTabla() {
    this.fecha = new Date();
    var saldo: number = this.valorCredito;
    var vCapital: number = this.capital;
    var vInteres: number = this.valorInteres;
    var vCuota: number;


    for (let index = 1; index <= this.cuotas; index++) {

      vInteres = Math.round(this.calculadorInteres(saldo, this.tasaInteres));
      vCuota = this.calculadorCuota(this.seguro, vInteres, vCapital);
      saldo = saldo - vCapital;

      this.lst.push({ Cuota: index, Fecha: this.fecha.getDate() + 30, Seguro: this.seguro, Interes: vInteres, Capital: vCapital, Valor: vCuota, Saldo: saldo });
      this.datasource =this.lst;
    }
    console.log(this.lst);

  }

  validarValorCredito() {
    if (this.valorCredito >= 1 && this.valorCredito <= 1000000) {

    } else {
 
      alert("valor de Credito invalido");
    }
  }

  calculadorInteres(valor: number, interes: number): number {

    return this.valorInteres = valor * interes;
  }

  calcularSeguro() {
    this.seguro = Math.round((this.valorCredito * 0.01) / this.cuotas);
  }
  calculadorCuota(seguro: number, interes: number, capital: number): number {
    return this.valorCuotaMensual = Math.round(seguro + interes + capital);

  }



}



