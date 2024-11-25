import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoGerenciamentoComponent } from './cabecalho-gerenciamento.component';

describe('CabecalhoGerenciamentoComponent', () => {
  let component: CabecalhoGerenciamentoComponent;
  let fixture: ComponentFixture<CabecalhoGerenciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoGerenciamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoGerenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
