import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReservaAdminComponent } from './registrar-reserva-admin.component';

describe('RegistrarReservaAdminComponent', () => {
  let component: RegistrarReservaAdminComponent;
  let fixture: ComponentFixture<RegistrarReservaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarReservaAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarReservaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
