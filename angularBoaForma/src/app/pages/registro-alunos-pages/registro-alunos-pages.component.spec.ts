import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAlunosPagesComponent } from './registro-alunos-pages.component';

describe('RegistroAlunosPagesComponent', () => {
  let component: RegistroAlunosPagesComponent;
  let fixture: ComponentFixture<RegistroAlunosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAlunosPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAlunosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
