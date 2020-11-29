import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CarService} from '../services/car.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RentalService} from '../services/rental.service';
import {AllCarsComponent} from '../Cars/all-cars/all-cars.component';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  displayedColumns: string[] = ['Imię', 'Nazwisko', 'Marka', 'Model', 'Data wypożyczenia', 'Data zwrotu'];

  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private rentalService: RentalService, private dialog: MatDialog) {
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


  onCreate(): void {
    const dialogRef = this.dialog.open(AllCarsComponent, {
      width: '500px'
    });
  }

  onUpdate(customer): void {
    const dialogRef = this.dialog.open(AllCarsComponent, {
      width: '500px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      this.customer = customer;
    });
  }

  onDelete(customer): void {
    //  this.customerService.deleteCustomer(customer.key, customer);
  }

  applyFilterAvailable(): void {
    this.dataSource.filter = 'dostępny';
  }

  applyFilterAll(): void {
    this.dataSource.filter = '';
  }

  applyFilterUnavailable(): void {
    this.dataSource.filter = 'wynajęty';
  }

}
