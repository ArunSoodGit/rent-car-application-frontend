import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewCarComponent } from './new-car.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

describe('NewCarComponent', () => {
  let component: NewCarComponent;
  let fixture: ComponentFixture<NewCarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule, FormsModule ],
      declarations: [ NewCarComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onModalCancel', () => {
    expect(component.onSubmit).toBeDefined();
  });
});
