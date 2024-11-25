import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaAdiministracaoComponentComponent } from './escolha-adiministracao-component.component';

describe('EscolhaAdiministracaoComponentComponent', () => {
  let component: EscolhaAdiministracaoComponentComponent;
  let fixture: ComponentFixture<EscolhaAdiministracaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaAdiministracaoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaAdiministracaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
