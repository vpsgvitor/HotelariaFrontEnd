import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './models/pessoa';
import { CheckIn } from './models/checkIn';

@Injectable({
  providedIn: 'root'
})

export class AppService {

pessoaUrl = 'http://localhost:8080/Hospede';
checkInUrl = 'http://localhost:8080/CheckIn';

constructor(private http: HttpClient) { }
  
  criarPessoa(pessoa: any){
    return this.http.post(this.pessoaUrl, pessoa);
  }

  listarPessoas(){
    return this.http.get<Pessoa[]>(`${this.pessoaUrl}`);
  }

  criarCheckIn(checkIn: any){
    return this.http.post(this.checkInUrl, checkIn);
  }

  listarCheckIns(){
    return this.http.get<CheckIn[]>(`${this.checkInUrl}`);
  }

}
