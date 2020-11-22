import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/Customer';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customer = new Customer();

  constructor(private service: CustomerService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): any {
  }

  onSubmit(customer: Customer): void {

    this.service.addCustomer(customer).subscribe(
      data => {
        console.log(data);
      });
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });
  }

}
