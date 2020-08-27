import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/car.service';
import {Car} from '../models/Car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  carList: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void{
    this.carService.getCars().subscribe(car =>
      this.carList = car
    );

  }

}
