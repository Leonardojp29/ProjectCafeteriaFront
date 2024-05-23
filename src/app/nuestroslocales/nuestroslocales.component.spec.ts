import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroslocalesComponent } from './nuestroslocales.component';

describe('NuestroslocalesComponent', () => {
  let component: NuestroslocalesComponent;
  let fixture: ComponentFixture<NuestroslocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroslocalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroslocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
