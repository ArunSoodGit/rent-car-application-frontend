import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';
import {FileService} from '../../services/file.service';
import {File} from '../../models/File';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  rental: Rental;
  files: File[];

  constructor(private router: Router, private route: ActivatedRoute, private rentalService: RentalService, private fileService: FileService) {
    this.getCustomer();
  }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(file => {
      this.files = file;
      console.log(file);
    });
  }

  getCustomer(): void {

    this.rentalService.getRentalById(this.route.snapshot.paramMap.get('id'))
      .subscribe(rental => this.rental = rental);
  }


  showCar(): void {
    this.router.navigate(['/cars', this.rental.car.vin]);

  }

  showCustomer(): void {
    this.router.navigate(['/customers', this.rental.customer.driverLicenseNumber]);

  }

  approve(rental: Rental): void {

  }

  generateDocuments(rental: Rental): void {

  }
}
