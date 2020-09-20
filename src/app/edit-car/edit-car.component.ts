import {Component, Inject, OnInit} from '@angular/core';
import {Car} from '../models/Car';
import {CarService} from '../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  car: Car = new Car();
  classess: string[] = ['A', 'B', 'C', 'D'];
  availables: string[] = ['Dostępny', 'Wynajęty'];

  constructor(private carService: CarService, private snackBar: MatSnackBar , public dialogRef: MatDialogRef<EditCarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Car) {
  }

  ngOnInit(): void {
  }

  onSubmit(car: Car): void {
    this.car.imagePath = 'https://raw.githubusercontent.com/ArunSoodGit/rent-car/master/src/assets/img/'
      + this.car.carMarkModel.model.toLowerCase() + '.png';
//
    //  this.carService.addCar(car).subscribe(
    //   data => {
    //    console.log(data);
    //    }
    //  );
    console.log(car);
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });

  }
}
