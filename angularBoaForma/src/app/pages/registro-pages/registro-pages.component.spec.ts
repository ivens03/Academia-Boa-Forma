import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPagesComponent } from './registro-pages.component';

describe('RegistroPagesComponent', () => {
  let component: RegistroPagesComponent;
  let fixture: ComponentFixture<RegistroPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
