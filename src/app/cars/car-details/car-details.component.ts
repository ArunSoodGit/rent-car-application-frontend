import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {NewRentalComponent} from '../../rentals/new-rental/new-rental.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;


  constructor(private route: ActivatedRoute, private carService: CarService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {

    this.carService.getCarByVin(this.route.snapshot.paramMap.get('id'))
      .subscribe(car => this.car = car);
  }

  reserve(car): void {
      const dialogRef = this.dialog.open(NewRentalComponent, {
        width: '500px',
        panelClass: 'icon-outside',
        data: car
      });
  }
}
