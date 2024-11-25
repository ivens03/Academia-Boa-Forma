import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosUsuariosComponentComponent } from './fotos-usuarios-component.component';

describe('FotosUsuariosComponentComponent', () => {
  let component: FotosUsuariosComponentComponent;
  let fixture: ComponentFixture<FotosUsuariosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotosUsuariosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosUsuariosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
