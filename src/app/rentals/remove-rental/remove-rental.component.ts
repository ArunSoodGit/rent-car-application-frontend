import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Customer} from '../../models/Customer';
import {CustomerService} from '../../services/customer.service';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';

@Component({
  selector: 'app-remove-rental',
  templateUrl: './remove-rental.component.html',
  styleUrls: ['./remove-rental.component.scss']
})
export class RemoveRentalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveRentalComponent>, private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: Rental, private rentalService: RentalService) {
  }


  ngOnInit(): void {
  }
  onRemove(): void {
    this.rentalService.deleteRental(this.data.id).subscribe();

    this.dialogRef.close();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });
  }
}
