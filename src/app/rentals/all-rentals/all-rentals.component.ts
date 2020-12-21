import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CarService} from '../../services/car.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RentalService} from '../../services/rental.service';
import {NewRentalComponent} from '../new-rental/new-rental.component';
import {EditRentalComponent} from '../edit-rental/edit-rental.component';
import {RemoveCarComponent} from '../../Cars/remove-car/remove-car.component';
import {Car} from '../../models/Car';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './all-rentals.component.html',
  styleUrls: ['./all-rentals.component.scss']
})
export class AllRentalsComponent implements OnInit {
  displayedColumns: string[] = ['Imię', 'Nazwisko', 'Marka', 'Model', 'Data wypożyczenia', 'Data zwrotu'];
  car: Car;
  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private router: Router, private rentalService: RentalService, private carService: CarService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.rentalService.getRentals().subscribe(rental => {
        console.log(rental);
        this.dataSource = new MatTableDataSource(rental);
        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data.engineCapacity + data.carMarkModel.mark + data.carMarkModel.model + data.carMarkModel.carClass.className +
            data.carMarkModel.carClass.pricePerNight + data.isAvailable;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }


  applyFilter(filterValue: string): void{
    this.dataSource.filter = filterValue;
  }

  refresh(): void {
    this.rentalService.getRentals().subscribe(rental => {
        this.changeDetectorRefs.detectChanges();
        console.log(rental);
        this.dataSource = new MatTableDataSource(rental);
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
    const dialogRef = this.dialog.open(NewRentalComponent, {
      width: '500px',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(car): void {
    const dialogRef = this.dialog.open(EditRentalComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: car
    }).afterClosed().subscribe(result => {
      this.refresh();
      this.car = car;
    });
  }

  show(element): any {
    this.router.navigate(['/rentals', element.id]);
  }



}
