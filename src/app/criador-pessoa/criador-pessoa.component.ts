import { Component, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup } from '@angular/forms';

import { AppService } from '../app.service';

@Component({
  selector: 'app-criador-pessoa',
  templateUrl: './criador-pessoa.component.html',
  styleUrls: ['./criador-pessoa.component.sass']
})

export class CriadorPessoaComponent {
  modalRef: BsModalRef;
  pessoa: any = {};
  @Output() atualizaPessoas = new EventEmitter();
  constructor(private modalService: BsModalService, private service: AppService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  criarPessoa(frm: FormGroup) {
    this.service.criarPessoa(this.pessoa).subscribe(res => {
    frm.reset();
    this.atualizaPessoas.emit();
    alert("Pessoa Adicionada com sucesso!");
    this.modalRef.hide();
    });
  }
}
