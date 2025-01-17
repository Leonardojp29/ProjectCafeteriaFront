import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMenuComponent } from './detalle-menu.component';

describe('DetalleMenuComponent', () => {
  let component: DetalleMenuComponent;
  let fixture: ComponentFixture<DetalleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
