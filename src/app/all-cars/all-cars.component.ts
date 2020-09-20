import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {CarService} from '../services/car.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {NewCarComponent} from '../new-car/new-car.component';
import {EditCarComponent} from '../edit-car/edit-car.component';
import {Car} from '../models/Car';
import {RemoveCarComponent} from '../remove-car/remove-car.component';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {

  displayedColumns: string[] = ['Zdjęcie', 'Marka', 'Model', 'Klasa', 'Cena', 'Kaucja', 'Pojemność silnika', 'edit'];
  car: Car;
  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private carService: CarService, private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.carService.getCars().subscribe(car => {
        console.log(car);
        this.dataSource = new MatTableDataSource(car);
        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data.engineCapacity + data.carMarkModel.mark + data.carMarkModel.model + data.carMarkModel.carClass.className +
            data.carMarkModel.carClass.pricePerNight + data.isAvailable;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }


  onCreate() {
    const dialogRef = this.dialog.open(NewCarComponent, {
      width: '500px'
    });
  }


  onRemove(car) {
    const dialogRef = this.dialog.open(RemoveCarComponent, {
      width: '500px',
      data: car
    });
    dialogRef.afterClosed().subscribe(result => {

      this.car = car;

    });
  }

  onEdit(car) {
    const dialogRef = this.dialog.open(EditCarComponent, {
      width: '500px',
      data: car
    });
    console.log(car.vin);
    dialogRef.afterClosed().subscribe(result => {

      this.car = car;

    });
  }

  applyFilterAvailable() {
    this.dataSource.filter = 'Dostępny';
  }

  applyFilterAll() {
    this.dataSource.filter = '';
  }

  applyFilterUnavailable() {
    this.dataSource.filter = 'Wynajęty';
  }
}
