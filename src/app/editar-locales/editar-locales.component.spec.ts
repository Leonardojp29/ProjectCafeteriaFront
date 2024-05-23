import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocalesComponent } from './editar-locales.component';

describe('EditarLocalesComponent', () => {
  let component: EditarLocalesComponent;
  let fixture: ComponentFixture<EditarLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarLocalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
