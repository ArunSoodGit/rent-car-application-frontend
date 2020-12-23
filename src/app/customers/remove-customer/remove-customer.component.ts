import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/Customer';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.scss']
})
export class RemoveCustomerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveCustomerComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Customer, private customerService: CustomerService) {
  }


  ngOnInit(): void {
  }

  onRemove(): void {
    this.customerService.deleteCustomer(this.data.driverLicenseNumber).subscribe();

    this.dialogRef.close();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
