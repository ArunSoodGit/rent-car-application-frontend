import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {NewCustomerComponent} from '../new-customer/new-customer.component';
import {EditClientComponent} from '../edit-client/edit-client.component';
import {CustomerService} from '../services/customer.service';
import {MatTableDataSource} from '@angular/material/table';
import {Car} from '../models/Car';
import {CarService} from '../services/car.service';
import {RemoveCarComponent} from '../Cars/remove-car/remove-car.component';
import {NewCarComponent} from '../Cars/new-car/new-car.component';
import {EditCarComponent} from '../Cars/edit-car/edit-car.component';
import {CarDetailsComponent} from '../Cars/car-details/car-details.component';

@Component({
  selector: 'app-clients',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
  displayedColumns: string[] = ['Zdjęcie', 'nrPrawaJazdy', 'Imie', 'Nazwisko', 'Kraj', 'Miasto', 'Adres', 'NrTelefonu', 'email', 'Edytuj'];
  car: Car;
  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService: CustomerService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.refresh();
  }


  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue;
  }


  refresh(): void {
    this.customerService.getCustomers().subscribe(customer => {
        this.changeDetectorRefs.detectChanges();
        console.log(customer);
        this.dataSource = new MatTableDataSource(customer);
        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data.customerName + data.customerSurname + data.driverLicenseNumber + data.country +
            data.cityName + data.address + data.phoneNumber + data.email;
          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }

  onRemove(car): void {
    const dialogRef = this.dialog.open(RemoveCarComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: car
    });
    dialogRef.afterClosed().subscribe(result => {

      this.car = car;
      this.refresh();
    });
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(NewCustomerComponent, {
      width: '500px',
      panelClass: 'icon-outside',
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(car): void{
    const dialogRef = this.dialog.open(EditCarComponent, {
      width: '500px',
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

