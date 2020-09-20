import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {CarService} from '../services/car.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {NewCarComponent} from '../new-car/new-car.component';
import {EditCarComponent} from '../edit-car/edit-car.component';
import {Car} from '../models/Car';
import {RemoveCarComponent} from '../remove-car/remove-car.component';
import {CarDetailsComponent} from '../car-details/car-details.component';

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

  constructor(private carService: CarService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.refresh();
  }


  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue;
  }


  refresh(): void {
    this.carService.getCars().subscribe(car => {
        this.changeDetectorRefs.detectChanges();
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

  onRemove(car): void {
    const dialogRef = this.dialog.open(RemoveCarComponent, {
      width: '480px',
      panelClass: 'icon-outside',
      data: car
    });
    dialogRef.afterClosed().subscribe(result => {

      this.car = car;
      this.refresh();
    });
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(NewCarComponent, {
      width: '480px',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(car): void{
    const dialogRef = this.dialog.open(EditCarComponent, {
      width: '480px',
      panelClass: 'icon-outside',
      data: car
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.car = car;
    });
  }

  applyFilterAvailable(): void {
    this.dataSource.filter = 'Dostępny';
  }

  applyFilterAll(): void {
    this.dataSource.filter = '';
  }

  applyFilterUnavailable(): void {
    this.dataSource.filter = 'Wynajęty';
  }

  show(element): any {
    const dialogRef = this.dialog.open(CarDetailsComponent, {
      width: '800px',
      panelClass: 'icon-outside',
      data: element
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.car = element;
    });
  }
}
