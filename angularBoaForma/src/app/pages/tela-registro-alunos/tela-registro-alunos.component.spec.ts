import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRegistroAlunosComponent } from './tela-registro-alunos.component';

describe('TelaRegistroAlunosComponent', () => {
  let component: TelaRegistroAlunosComponent;
  let fixture: ComponentFixture<TelaRegistroAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaRegistroAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaRegistroAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
