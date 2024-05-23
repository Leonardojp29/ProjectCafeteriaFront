import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCategoriaAdminComponent } from './registrar-categoria-admin.component';

describe('RegistrarCategoriaAdminComponent', () => {
  let component: RegistrarCategoriaAdminComponent;
  let fixture: ComponentFixture<RegistrarCategoriaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarCategoriaAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarCategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
