import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewRentalComponent } from './new-rental.component';

describe('NewRentalComponent', () => {
  let component: NewRentalComponent;
  let fixture: ComponentFixture<NewRentalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
