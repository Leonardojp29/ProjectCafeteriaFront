import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMenuComponent } from './registrar-menu.component';

describe('RegistrarMenuComponent', () => {
  let component: RegistrarMenuComponent;
  let fixture: ComponentFixture<RegistrarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
