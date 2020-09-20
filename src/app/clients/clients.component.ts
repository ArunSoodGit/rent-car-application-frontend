import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {NewClientComponent} from '../new-client/new-client.component';
import {EditClientComponent} from '../edit-client/edit-client.component';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['imię', 'nazwisko', 'email', 'nrTelefonu', 'pesel', 'nrPrawaJazdy', 'kraj', 'miasto', 'ulica', 'nrBudynku', 'nrLokalu', 'edit'];

  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService: ClientsService, private router: Router, private dialog: MatDialog) {
  }


  ngOnInit() {
    //this.customerService.getClients().subscribe(data => {
     // console.log(data);
     // this.dataSource = new MatTableDataSource(data);
    //  this.dataSource.sort = this.sort;
     // this.dataSource.paginator = this.paginator;
   // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreate() {
    const dialogRef = this.dialog.open(NewClientComponent, {
      width: '500px'
    });
  }
  onDelete(customer) {
   // this.customerService.deleteClient(customer.key, customer);
  }

  onUpdate(customer) {
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '500px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      this.customer = customer;
    });
  }


  onSearchClear() {
    this.searchKey = '';
    this.applyFilter2();
  }

  applyFilter2() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}

