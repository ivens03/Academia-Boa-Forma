import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProfessorPagesComponent } from './registro-professor-pages.component';

describe('RegistroProfessorPagesComponent', () => {
  let component: RegistroProfessorPagesComponent;
  let fixture: ComponentFixture<RegistroProfessorPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProfessorPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProfessorPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
