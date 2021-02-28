import {Component, Inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Customer} from '../../models/Customer';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent {

  constructor(private router: Router, private customerService: CustomerService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<EditCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public customer: Customer) {
  }

  onSubmit(customer: Customer): void {
    console.log(customer);
    this.customerService.updateCustomer(customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/customers']);
      }
    );
    this.dialogRef.close();
    this.snackBar.open('Edytowanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
