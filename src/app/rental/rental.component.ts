import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CarTableComponent} from '../car-table/car-table.component';
import {CarService} from '../services/car.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RentalService} from '../services/rental.service';

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


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }


  onCreate() {
    const dialogRef = this.dialog.open(CarTableComponent, {
      width: '500px'
    });
  }

  onUpdate(customer) {
    const dialogRef = this.dialog.open(CarTableComponent, {
      width: '500px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      this.customer = customer;
    });
  }

  onDelete(customer) {
    //  this.customerService.deleteCustomer(customer.key, customer);
  }

  applyFilterAvailable() {
    this.dataSource.filter = 'dostępny';
  }

  applyFilterAll() {
    this.dataSource.filter = '';
  }

  applyFilterUnavailable() {
    this.dataSource.filter = 'wynajęty';
  }

}
