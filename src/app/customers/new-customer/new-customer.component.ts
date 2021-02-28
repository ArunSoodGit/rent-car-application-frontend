import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/Customer';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customer = new Customer();

  constructor(private router: Router, private service: CustomerService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<NewCustomerComponent>) {
  }

  ngOnInit(): any {
  }

  onSubmit(customer: Customer): void {

    this.service.addCustomer(customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/customers']);
      });
    this.dialogRef.close();
    this.snackBar.open('Poprawnie dodano klienta', 'OK', {
      duration: 2000,
    });
  }

}
