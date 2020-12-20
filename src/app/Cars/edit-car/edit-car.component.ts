import {Component, Inject} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent {
  // car: Car = new Car();
  classes: string[] = ['A', 'B', 'C', 'D'];
  available: string[] = ['Dostępny', 'Wynajęty'];
  reviews: string[] = ['Tak', 'Nie'];

  constructor(private router: Router, private carService: CarService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<EditCarComponent>,
              @Inject(MAT_DIALOG_DATA) public car: Car) {
  }


  onSubmit(car: Car): void {
    console.log(car);
    this.carService.updateCar(car).subscribe(
      data => {
        this.router.navigate(['/cars']);
      }
    );
    this.dialogRef.close();
    this.snackBar.open('Edytowanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }
}
