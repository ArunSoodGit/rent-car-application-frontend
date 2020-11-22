import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../../services/car.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {

  displayedColumns: string[] = ['Zdjęcie', 'Marka', 'Model', 'Klasa', 'Cena', 'Kaucja', 'Pojemność silnika', 'edit'];

  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private carService: CarService, private dialog: MatDialog) {
  }

  test(index) {
    console.log(index,'test');
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(car => {
        console.log(car);
        this.dataSource = new MatTableDataSource(car);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter2();
  }

  applyFilter2() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
}
