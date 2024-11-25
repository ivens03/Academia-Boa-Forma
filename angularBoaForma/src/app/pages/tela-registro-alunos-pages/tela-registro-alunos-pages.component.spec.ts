import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRegistroAlunosPagesComponent } from './tela-registro-alunos-pages.component';

describe('TelaRegistroAlunosPagesComponent', () => {
  let component: TelaRegistroAlunosPagesComponent;
  let fixture: ComponentFixture<TelaRegistroAlunosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaRegistroAlunosPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaRegistroAlunosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
