import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/car.service';
import {Car} from '../models/Car';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  car: Car = new Car();
  classess: string[] = ['A', 'B', 'C', 'D'];
  availables: string[] = ['Dostępny', 'Wynajęty'];

  constructor(private carService: CarService, private snackBar: MatSnackBar) {

  }


  ngOnInit(): void {

  }

  onSubmit(car: Car): void {
    this.car.imagePath = 'https://raw.githubusercontent.com/ArunSoodGit/rent-car/master/src/assets/img/'
      + this.car.carMarkModel.model.toLowerCase() + '.png';

    this.carService.addCar(car).subscribe(
      data => {
        console.log(data);
      }
    );
    console.log(car);
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });

  }
}
