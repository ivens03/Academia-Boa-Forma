import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaPagesComponent } from './ajuda-pages.component';

describe('AjudaPagesComponent', () => {
  let component: AjudaPagesComponent;
  let fixture: ComponentFixture<AjudaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjudaPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
