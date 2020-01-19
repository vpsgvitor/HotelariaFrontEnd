import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadorCheckInComponent } from './criador-check-in.component';

describe('CriadorCheckInComponent', () => {
  let component: CriadorCheckInComponent;
  let fixture: ComponentFixture<CriadorCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriadorCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriadorCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
