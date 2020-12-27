import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;


  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {

    this.carService.getCarByVin(this.route.snapshot.paramMap.get('id'))
      .subscribe(car => this.car = car);
  }

  reserve(data): void {

  }
}
