import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRentalsComponent } from './all-rentals.component';

describe('RentalComponent', () => {
  let component: AllRentalsComponent;
  let fixture: ComponentFixture<AllRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
