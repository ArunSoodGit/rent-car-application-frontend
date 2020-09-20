import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Car} from '../models/Car';

@Component({
  selector: 'app-remove-car',
  templateUrl: './remove-car.component.html',
  styleUrls: ['./remove-car.component.scss']
})
export class RemoveCarComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<RemoveCarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Car) { }

  ngOnInit(): void {
  }

  onRemove() {

  }
}
