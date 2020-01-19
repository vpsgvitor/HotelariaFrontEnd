import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadorPessoaComponent } from './criador-pessoa.component';

describe('CriadorPessoaComponent', () => {
  let component: CriadorPessoaComponent;
  let fixture: ComponentFixture<CriadorPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriadorPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriadorPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
