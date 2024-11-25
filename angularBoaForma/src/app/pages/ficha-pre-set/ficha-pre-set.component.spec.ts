import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPreSetComponent } from './ficha-pre-set.component';

describe('FichaPreSetComponent', () => {
  let component: FichaPreSetComponent;
  let fixture: ComponentFixture<FichaPreSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaPreSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaPreSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
