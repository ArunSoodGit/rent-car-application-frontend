import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllCarsComponent } from './all-cars.component';

describe('AllCarsComponent', () => {
  let component: AllCarsComponent;
  let fixture: ComponentFixture<AllCarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
