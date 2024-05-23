import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacartaComponent } from './lacarta.component';

describe('LacartaComponent', () => {
  let component: LacartaComponent;
  let fixture: ComponentFixture<LacartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LacartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LacartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
