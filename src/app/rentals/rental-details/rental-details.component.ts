import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  rental: Rental;

  constructor(private router: Router, private route: ActivatedRoute, private rentalService: RentalService) {
    this.getCustomer();
  }

  ngOnInit(): void {
  }

  getCustomer(): void {

    this.rentalService.getRentalById(this.route.snapshot.paramMap.get('id'))
      .subscribe(rental => this.rental = rental);
  }

  reserve(data): void {

  }

  showCar(): void {
    this.router.navigate(['/cars', this.rental.car.vin]);

  }

  showCustomer(): void {
    this.router.navigate(['/customers', this.rental.customer.driverLicenseNumber]);

  }
}
