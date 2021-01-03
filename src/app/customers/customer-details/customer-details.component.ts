import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/Customer';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';
import {NewRentalComponent} from '../../rentals/new-rental/new-rental.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  customer: Customer;
  rentals: Rental[];

  constructor(private router: Router, private route: ActivatedRoute,
              private customerService: CustomerService,
              private rentalService: RentalService,
              private dialog: MatDialog) {
    this.getCustomer();
  }

  getCustomer(): void {

    this.customerService.getCustomerByDriverLicenceNumber(this.route.snapshot.paramMap.get('id'))
      .subscribe(customer => {
        this.customer = customer;
        this.rentalService.getRentalsForCustomer(customer).subscribe(rental => this.rentals = rental);
      });

  }


  showRental(rental): void {
    this.router.navigate(['/rentals', rental.id]);
  }

}
