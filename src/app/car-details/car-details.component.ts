import {Component, Inject, OnInit} from '@angular/core';
import {Car} from '../models/Car';
import {CarService} from '../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {


  constructor(private carService: CarService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<CarDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Car) {
  }

  ngOnInit(): void {

  }


}
