import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CarService} from '../../services/car.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RentalService} from '../../services/rental.service';
import {NewRentalComponent} from '../new-rental/new-rental.component';
import {EditRentalComponent} from '../edit-rental/edit-rental.component';
import {Router} from '@angular/router';
import {RemoveRentalComponent} from '../remove-rental/remove-rental.component';
import {Rental} from '../../models/Rental';

@Component({
  selector: 'app-rental',
  templateUrl: './all-rentals.component.html',
  styleUrls: ['./all-rentals.component.scss']
})
export class AllRentalsComponent implements OnInit {
  displayedColumns: string[] = ['Nr. rezerwacji', 'Imię', 'Nazwisko', 'Marka', 'Model', 'Data wypożyczenia', 'Data zwrotu', 'Status', 'Edytuj'];
  rental: Rental;
  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  statusColor: 'backgroundColor: green';

  constructor(private router: Router, private rentalService: RentalService,
              private carService: CarService, private dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.rentalService.getRentals().subscribe(rental => {
        console.log(rental);
        this.dataSource = new MatTableDataSource(rental);
        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data.customer.customerName + data.customer.customerSurname + data.car.carMarkModel.mark + data.car.carMarkModel.model;

          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }


  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue;
  }

  refresh(): void {
    this.rentalService.getRentals().subscribe(rental => {
        this.changeDetectorRefs.detectChanges();
        console.log(rental);
        this.dataSource = new MatTableDataSource(rental);
        this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data.customer.customerName + data.customer.customerSurname + data.car.carMarkModel.mark + data.car.carMarkModel.model;

          return dataStr.indexOf(filter) !== -1;
        };
      }
    );
  }

  onRemove(rental): void {
    const dialogRef = this.dialog.open(RemoveRentalComponent, {
      width: '400px',
      panelClass: 'icon-outside',
      data: rental
    });
    dialogRef.afterClosed().subscribe(result => {

      this.rental = rental;
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

  onEdit(rental): void {
    const dialogRef = this.dialog.open(EditRentalComponent, {
      width: '500px',
      panelClass: 'icon-outside',
      data: rental
    }).afterClosed().subscribe(r => {
      this.refresh();
      this.rental = r;
    });
  }

  show(element): any {
    this.router.navigate(['/rentals', element.id]);
  }


}
