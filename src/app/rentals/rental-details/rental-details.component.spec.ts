import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RentalDetailsComponent } from './rental-details.component';

describe('RentalDetailsComponent', () => {
  let component: RentalDetailsComponent;
  let fixture: ComponentFixture<RentalDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
