import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMenuComponent } from './categoria-menu.component';

describe('CategoriaMenuComponent', () => {
  let component: CategoriaMenuComponent;
  let fixture: ComponentFixture<CategoriaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
