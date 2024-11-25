import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaProntaComponent } from './ficha-pronta.component';

describe('FichaProntaComponent', () => {
  let component: FichaProntaComponent;
  let fixture: ComponentFixture<FichaProntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaProntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaProntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
