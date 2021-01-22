import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditRentalComponent } from './edit-rental.component';

describe('EditRentalComponent', () => {
  let component: EditRentalComponent;
  let fixture: ComponentFixture<EditRentalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
