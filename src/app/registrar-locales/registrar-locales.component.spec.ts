import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLocalesComponent } from './registrar-locales.component';

describe('RegistrarLocalesComponent', () => {
  let component: RegistrarLocalesComponent;
  let fixture: ComponentFixture<RegistrarLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarLocalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
