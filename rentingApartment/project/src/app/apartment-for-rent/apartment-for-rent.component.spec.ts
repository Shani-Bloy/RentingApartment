import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentForRentComponent } from './apartment-for-rent.component';

describe('ApartmentForRentComponent', () => {
  let component: ApartmentForRentComponent;
  let fixture: ComponentFixture<ApartmentForRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentForRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
