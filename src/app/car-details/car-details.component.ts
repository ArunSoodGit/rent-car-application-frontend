import {Component, OnInit} from '@angular/core';
import {Car} from '../models/Car';
import {CarService} from '../services/car.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  carList: Car[] = [];

  public carService: CarService;

  constructor(carService: CarService, private route: ActivatedRoute) {
    this.carService = carService;
  }

  ngOnInit(): void {
    this.findCar(this.route.snapshot.params.id);
  }

  findCar(vin: string) {

    this.carService.getCars().subscribe(cars => {
      this.carList = cars;

      return this.car = this.carList.slice(0).find(car => car.vin === vin);

    });
  }
}
