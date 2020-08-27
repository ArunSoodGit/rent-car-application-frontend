import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../services/car.service';
import {Car} from '../models/Car';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['imię', 'nazwisko', 'email', 'nrTelefonu', 'pesel', 'nrPrawaJazdy', 'kraj', 'miasto', 'ulica', 'nrBudynku', 'nrLokalu', 'edit'];
 
  dataSource;
  customer;
  searchKey: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(car => {
        this.dataSource = new MatTableDataSource(car);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  onSearchClear() {
    
  }

  applyFilter($event: KeyboardEvent) {
    
  }

  onCreate() {
    
  }

  onUpdate(element: any) {
    
  }

  onDelete(element: any) {
    
  }
}
