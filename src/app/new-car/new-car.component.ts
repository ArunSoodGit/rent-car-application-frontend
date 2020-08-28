import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';
import {Car} from '../models/Car';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  car = new Car();

  constructor(private carService: CarService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onSubmit(car: Car) {
    this.carService.addCar(car);
    console.log(car);
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });
  }
}
