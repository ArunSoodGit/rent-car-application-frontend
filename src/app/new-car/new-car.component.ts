import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/car.service';
import {Car} from '../models/Car';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  car: Car = new Car();
  classess: string[] = ['A', 'B', 'C', 'D'];
  availables: string[] = ['Dostępny', 'Wynajęty'];
  reviews: string[] = ['Tak', 'Nie'];

  constructor(private router: Router, private carService: CarService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<NewCarComponent>) {
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

    this.dialogRef.close();
    this.snackBar.open('Dodawanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
