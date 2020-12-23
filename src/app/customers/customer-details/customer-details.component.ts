import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/Customer';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  customer: Customer;
  rentals: Rental[];

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private rentalService: RentalService) {
    this.getCustomer();

  }


  getCustomer(): void {

    this.customerService.getCustomerByDriverLicenceNumber(this.route.snapshot.paramMap.get('id'))
      .subscribe(customer => this.customer = customer);

  }

  reserve(data): void {

  }

  getRentalsForCustomer(customer): void {

    this.rentalService.getRentalsForCustomer(customer).subscribe(rental => this.rentals = rental);
    console.log(this.customer);
  }

  show(): void {
    console.log('test');
  }

}
