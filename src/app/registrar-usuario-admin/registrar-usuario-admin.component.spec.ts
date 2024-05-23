import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsuarioAdminComponent } from './registrar-usuario-admin.component';

describe('RegistrarUsuarioAdminComponent', () => {
  let component: RegistrarUsuarioAdminComponent;
  let fixture: ComponentFixture<RegistrarUsuarioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarUsuarioAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
