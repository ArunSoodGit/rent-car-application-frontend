import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/Customer';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  rental: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) {
    this.getCustomer();
  }

  ngOnInit(): void {}

  getCustomer(): void {

    this.rentalService.getRentalById(this.route.snapshot.paramMap.get('id'))
      .subscribe(rental => this.rental = rental);
  }
  reserve(data): void {

  }

}