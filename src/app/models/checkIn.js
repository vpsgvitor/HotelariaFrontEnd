import { Pessoa } from './pessoa';

export class CheckIn {
  hospede: Pessoa[];
  dataEntrada: Date = new Date();
  dataSaida: Date = new Date();
  adicionalVeiculo: boolean;
}
