import { Component, Input, OnInit } from '@angular/core';
import { CheckIn } from '../models/checkIn';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass']
})

export class ConsultasComponent{
  filtro: any;
  @Input() checkIns: CheckIn[] = [];
  data1: Date;
  data2: Date;
  valorTotal: number;
  valorTotalFormatado: any;

  calculaValor(checkIn: CheckIn){
    this.valorTotal = 0;
    this.data1 = new Date(checkIn.dataEntrada);
    this.data2 = new Date(checkIn.dataSaida);

    while(this.data1 < this.data2){
      this.calculaDiaria(checkIn.adicionalVeiculo);
      this.data1.setDate(this.data1.getDate() + 1);
    }
    
    this.data2.getUTCHours() >= 16 ? this.data2.getUTCMinutes() >= 30 ?
     this.calculaDiaria(checkIn.adicionalVeiculo):this.data2.getUTCHours() > 16 ?
     this.calculaDiaria(checkIn.adicionalVeiculo):null:null;

    return this.numberToReal(this.valorTotal);
  }

  get getCheckIns(): CheckIn[] {
    if(this.filtro == 1){
      return this.checkIns.filter(option => new Date(option.dataSaida) > new Date());
    }else if(this.filtro == 2){
      return this.checkIns.filter(option => new Date(option.dataSaida) < new Date());
    }else{
      return this.checkIns;
    }
  }

  calculaDiaria(adicional: boolean){
    this.valorTotal += adicional ? 20 : 0;  
    this.valorTotal += this.data1.getDay() == 0 || this.data1.getDay() == 6 ? 150 : 120;
  }

  numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
  }

 }
