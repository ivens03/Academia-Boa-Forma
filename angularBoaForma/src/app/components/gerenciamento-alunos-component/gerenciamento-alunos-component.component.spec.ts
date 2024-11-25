import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoAlunosComponentComponent } from './gerenciamento-alunos-component.component';

describe('GerenciamentoAlunosComponentComponent', () => {
  let component: GerenciamentoAlunosComponentComponent;
  let fixture: ComponentFixture<GerenciamentoAlunosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoAlunosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoAlunosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
