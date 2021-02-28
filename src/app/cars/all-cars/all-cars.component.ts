import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {CarService} from '../../services/car.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {NewCarComponent} from '../new-car/new-car.component';
import {EditCarComponent} from '../edit-car/edit-car.component';
import {Car} from '../../models/Car';
import {RemoveCarComponent} from '../remove-car/remove-car.component';
import {CarDetailsComponent} from '../car-details/car-details.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit , AfterViewInit {

  displayedColumns: string[] = ['Zdjęcie', 'Marka', 'Model', 'Klasa', 'Cena', 'Kaucja', 'Pojemność silnika', 'edit'];
  car: Car;
  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  color: 'black';

  constructor(private router: Router, private carService: CarService, private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
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
        this.dataSource.paginator = this.paginator;

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
      height: 'auto',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(car): void {
    const dialogRef = this.dialog.open(EditCarComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: car
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.car = car;
    });
  }

  show(element): any {
    this.router.navigate(['/cars', element.vin]);
  }


}
