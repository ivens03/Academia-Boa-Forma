import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoAlunosComponent } from './gerenciamento-alunos.component';

describe('GerenciamentoAlunosComponent', () => {
  let component: GerenciamentoAlunosComponent;
  let fixture: ComponentFixture<GerenciamentoAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
