import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/pessoa';
import { CheckIn } from './models/checkIn';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'hotelariaAngular';

  options: Pessoa[] = [];
  checkIns: CheckIn[] = [];

  constructor(private service: AppService) { }

  ngOnInit(){
    this.service.listarPessoas().subscribe(res => this.options = res);
    this.service.listarCheckIns().subscribe(res => this.checkIns = res);
  }

  criarCheckIn(checkIn: CheckIn[]){
    this.service.criarCheckIn(checkIn).subscribe(res => {
      alert("checkIn adicionado com sucesso!");
      this.ngOnInit();
    });
  }
}
