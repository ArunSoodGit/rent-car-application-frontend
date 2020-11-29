import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../models/Car';
import {Customer} from '../models/Customer';
import {CustomerService} from '../services/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.component.html',
  styleUrls: ['./new-rental.component.scss']
})
export class NewRentalComponent implements OnInit {
  customer = new Customer();
  car: Car = new Car();
  classes: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'S', 'J', 'M'];
  available: string[] = ['Dostępny', 'Wynajęty'];
  reviews: string[] = ['Tak', 'Nie'];
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
