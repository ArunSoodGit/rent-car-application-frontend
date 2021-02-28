import {Component, Inject, OnInit} from '@angular/core';
import {Car} from '../../models/Car';
import {Customer} from '../../models/Customer';
import {CustomerService} from '../../services/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Rental} from '../../models/Rental';
import {RentalService} from '../../services/rental.service';
import {Status} from '../../Status';

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
  reservation: Rental[];
  dates: Date[] = [];
  myDate: Date;

  constructor(private router: Router, private customerService: CustomerService,
              private carService: CarService, private rentalService: RentalService,
              private snackBar: MatSnackBar, public dialogRef: MatDialogRef<NewRentalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Car) {
  }

  ngOnInit(): any {
    this.myDate = new Date();
    this.myDate.setHours(0);
    this.myDate.setMinutes(0);
    this.myDate.setSeconds(0);
    this.myDate.setMilliseconds(0);
    this.carService.getCars().subscribe(car => this.cars = car);
    this.customerService.getCustomers().subscribe(customer => this.customers = customer);

  }


  onSubmit(rental: Rental): void {
    this.data ? rental.car = this.data : rental.car = this.car;
    console.log(rental.car);
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
    this.data ? pricePerNight = this.data.carMarkModel.carClass.pricePerNight
      : pricePerNight = this.car.carMarkModel.carClass.pricePerNight;
    console.log(pricePerNight);
    if (this.rental.returnDate != null && this.rental.rentalDate != null && pricePerNight != null) {
      const numberOdDay = (this.rental.returnDate.getTime() - this.rental.rentalDate.getTime()) / (1000 * 60 * 60 * 24);
      this.rental.rentalCost = numberOdDay * pricePerNight;
    }

  }

  onChangeCar(car: Car): void {
    console.log(car);

    this.dates = [];
    this.rentalService.getRentalByCar(car).subscribe(reservation => {
      this.reservation = reservation;
      this.prepareDate(reservation);
    });

  }

  rangeFilter = (d: Date): boolean => {
    const time = d.getTime();
    return !this.dates.find(x => x.getTime() === time) && time >= (this.myDate.getTime());

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
