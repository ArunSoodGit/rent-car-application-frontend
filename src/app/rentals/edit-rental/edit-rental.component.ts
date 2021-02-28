import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarService} from '../../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Car} from '../../models/Car';
import {Rental} from '../../models/Rental';
import {RentalService} from '../../services/rental.service';
import {Customer} from '../../models/Customer';
import {CustomerService} from '../../services/customer.service';
import {Status} from '../../Status';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.scss']
})
export class EditRentalComponent implements OnInit {

  customer = new Customer();
  car: Car = new Car();
  rental2: Rental;
  cars: Car[];
  customers: Customer[];
  reservation: Rental[];
  dates: Date[] = [];

  constructor(private router: Router, private customerService: CustomerService,
              private carService: CarService, private rentalService: RentalService,
              private snackBar: MatSnackBar, public dialogRef: MatDialogRef<EditRentalComponent>,
              @Inject(MAT_DIALOG_DATA) public rental: Rental) {
  }

  ngOnInit(): any {
    this.carService.getCars().subscribe(car => this.cars = car);
    this.customerService.getCustomers().subscribe(customer => this.customers = customer);
    this.car = this.rental.car;
    this.customer = this.rental.customer;
    this.rental2 = this.rental;
    console.log(this.rental);

  }


  onSubmit(rental: Rental): void {

    console.log(rental.car);
    rental.car = this.car;
    rental.customer = this.customer;
    rental.status = Status.PLANING;
    console.log(rental);
    this.rentalService.addRental(rental).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/rentals']);
      });

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }

  getRentalCost(): void {
    let pricePerNight = 0;
    this.rental ? pricePerNight = this.rental.car.carMarkModel.carClass.pricePerNight
      : pricePerNight = this.car.carMarkModel.carClass.pricePerNight;

    if (this.rental.returnDate != null && this.rental.rentalDate != null && pricePerNight != null) {
      console.log(this.rental.returnDate);
      const numberOdDay = (new Date(this.rental.returnDate).getTime() - new Date(this.rental.rentalDate).getTime()) / (1000 * 60 * 60 * 24);
      this.rental.rentalCost = numberOdDay * pricePerNight;
    }

  }

  onChangeCar(car: Car): void {
    console.log(car);
    this.rental.car = null;
    this.dates = [];
    this.rentalService.getRentalByCar(car).subscribe(reservation => {
      this.reservation = reservation;
      this.prepareDate(reservation);
    });

  }

  rangeFilter = (d: Date): boolean => {
    const time = d.getTime();
    return !this.dates.find(x => x.getTime() === time);
  };

  getDatesBetweenDates(startDate, endDate): Date[] {
    const theDate = new Date(startDate);
    while (theDate <= endDate) {
      this.dates.push(new Date(theDate));
      theDate.setDate(theDate.getDate() + 1);
    }
    return this.dates;
  }

  prepareDate(rental: Rental[]): void {
    this.dates = [];
    return rental.forEach(r => {
      if (r !== undefined && r !== null) {
        return this.getDatesBetweenDates(new Date(r.rentalDate), new Date(r.returnDate));
      } else {
        this.dates = [];
        return null;
      }
    });

  }

}
