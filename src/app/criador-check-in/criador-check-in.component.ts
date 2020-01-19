import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Pessoa } from '../models/pessoa';


@Component({
  selector: 'app-criador-check-in',
  templateUrl: './criador-check-in.component.html',
  styleUrls: ['./criador-check-in.component.sass']
  
})

export class CriadorCheckInComponent implements OnInit{
  @Input() options: Pessoa[];
  @Output() novoCheckIn = new EventEmitter();

  checkIn: any = {};
  filteredOptions: Observable<Pessoa[]>;
  myControl = new FormControl();
  
 
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : ""),
      map(nome => nome ? this._filter(nome) : this.options.slice())
    );
  }

  displayFn(pessoa?: Pessoa): string | undefined {
    return pessoa ? pessoa.nome : undefined;
  }

  private _filter(nome: string): Pessoa[] {
    const filterValue = nome.toLowerCase();
    return this.options.filter(
      option => option.nome.toLowerCase().indexOf(filterValue) === 0 ||
      option.documento.indexOf(filterValue) === 0 ||
      option.telefone.indexOf(filterValue) === 0
    );
  }

  criarCheckIn(frmCheckIn: FormGroup) {
    this.novoCheckIn.emit(this.checkIn);
    frmCheckIn.reset();
    this.checkIn = [];
  }

}
