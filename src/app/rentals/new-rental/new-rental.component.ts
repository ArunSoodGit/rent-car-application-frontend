import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/Car';
import {Customer} from '../../models/Customer';
import {CustomerService} from '../../services/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {Rental} from '../../models/Rental';
import {RentalService} from '../../services/rental.service';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.component.html',
  styleUrls: ['./new-rental.component.scss']
})
export class NewRentalComponent implements OnInit {
  customer = new Customer();
  car: Car = new Car();
  rental: Rental = new Rental();


  cars: Car[];
  customers: Customer[];


  constructor(private router: Router, private customerService: CustomerService,
              private carService: CarService, private rentalService: RentalService,
              private snackBar: MatSnackBar, public dialogRef: MatDialogRef<NewRentalComponent>) {
  }

  ngOnInit(): any {
    this.carService.getCars().subscribe(car => this.cars = car);
    this.customerService.getCustomers().subscribe(customer => this.customers = customer);
  }


  onSubmit(rental: Rental): void {
    rental.car = this.car;
    rental.customer = this.customer;
    console.log(rental);

    this.rentalService.addRental(rental).subscribe(
      data => {
        this.router.navigate(['/rentals']);
      });

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }

  getRentalCost(): void {

    if (this.rental.returnDate != null && this.rental.rentalDate != null  && this.car.carMarkModel.carClass.pricePerNight != null) {
      const numberOdDay = (this.rental.returnDate.getTime() - this.rental.rentalDate.getTime()) / (1000 * 60 * 60 * 24);
      this.rental.rentalCost = numberOdDay * this.car.carMarkModel.carClass.pricePerNight;
    }

  }
}
