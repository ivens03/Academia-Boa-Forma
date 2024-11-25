import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministracaoPagesComponent } from './home-administracao-pages.component';

describe('HomeAdministracaoPagesComponent', () => {
  let component: HomeAdministracaoPagesComponent;
  let fixture: ComponentFixture<HomeAdministracaoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdministracaoPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdministracaoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
