import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {
    this.getCustomer();
  }

  ngOnInit(): void {}

  getCustomer(): void {

    this.customerService.getCustomerByDriverLicenceNumber(this.route.snapshot.paramMap.get('id'))
      .subscribe(customer => this.customer = customer);
  }
  reserve(data): void {

  }
}
