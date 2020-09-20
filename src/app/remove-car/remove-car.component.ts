import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Car} from '../models/Car';
import {CarService} from '../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-remove-car',
  templateUrl: './remove-car.component.html',
  styleUrls: ['./remove-car.component.scss']
})
export class RemoveCarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveCarComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Car, private carService: CarService) {
  }

  ngOnInit(): void {
  }

  onRemove() {
    console.log(this.data.vin);
    this.carService.deleteCar(this.data.vin).subscribe();

    this.dialogRef.close();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
