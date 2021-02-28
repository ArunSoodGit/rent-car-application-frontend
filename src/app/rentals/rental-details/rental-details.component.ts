import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';
import {FileService} from '../../services/file.service';
import {File} from '../../models/File';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {DatePipe} from '@angular/common';
import {Status} from '../../Status';
import {DeleteFileComponent} from '../../delete-file/delete-file.component';
import {MatDialog} from '@angular/material/dialog';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  rental: Rental;
  files: File[] = [];
  file: File;
  rentalDate;
  returnDate;

  constructor(private router: Router, private route: ActivatedRoute,
              private rentalService: RentalService,
              private fileService: FileService, public datePipe: DatePipe,
              private dialog: MatDialog) {
    this.getRentals();
  }

  ngOnInit(): void {
    return this.getFiles();
  }

  accept(): void {
    this.rental.status = Status.IN_PROGRESS;
    this.rentalService.addRental(this.rental).subscribe(
      data => {
        this.router.navigate(['/rentals']);
      });
  }

  acceptAndConfirm(): void {
    this.rental.status = Status.FINISHED;
    this.rentalService.addRental(this.rental).subscribe(
      data => {
        this.router.navigate(['/rentals']);
      });
  }

  getFiles(): void {
    this.fileService.getFilesForRental(this.route.snapshot.paramMap.get('id')).subscribe(file => {
      this.files = file;
      console.log(file);
    });
  }

  getRentals(): void {
    this.rentalService.getRentalById(this.route.snapshot.paramMap.get('id'))
      .subscribe(rental => this.rental = rental);
  }


  showCar(): void {
    this.router.navigate(['/cars', this.rental.car.vin]);

  }

  showCustomer(): void {
    this.router.navigate(['/customers', this.rental.customer.driverLicenseNumber]);

  }


  generateDocuments(): void {

    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    const formData = new FormData();
    let blob = null;
    pdfDocGenerator.getBuffer((buffer) => {
      blob = new Blob([buffer]);
      formData.append('file', blob, this.rental.id.toString());
      this.fileService.postFile(formData).subscribe((response => {
        this.refresh();
      }));
    });
  }

  getDocumentDefinition(): any {

    return {
      content: [
        {
          text: 'UMOWA NAJMU SAMOCHODU',
          style: 'header'
        },
        {
          text: 'Zawarta w dniu ' + new Date().toLocaleDateString() + ' w Katowicach, pomiędzy firmą  \n',
          style: 'text'
        },
        {
          text: '"RentCar123" Arun Sood \n\n ' +
            '40-879 Katowice, ul.Ulica 78 \n\n' +
            ' NIP: 980-267-21-34\n\n' +
            ' REGON: 890392876\n\n' +
            ' Test Bank 89 2039 8883 8888 2399 1321 8884\n\n',
          style: 'company'
        },
        {
          text: 'zwanym w dalszej części umowy WYNAJMUJĄCYM, \n',
          style: 'text'
        },
        {
          text: 'a\n\n ' + this.rental.customer.customerName.toUpperCase() + ' ' + this.rental.customer.customerSurname.toUpperCase() + '  '
            + 'zamieszkałym w ' + this.rental.customer.cityName.toUpperCase() + ', przy ul.' + this.rental.customer.address.toUpperCase() + ',\n' +
            'legitymującym się prawem jazdy seria i nr: '
            + this.rental.customer.driverLicenseNumber + '  zwanym w dalszej części umowy NAJEMCĄ.\n',
          style: 'text'
        },

        {
          text: '§1\n\n',
          style: 'subheader'
        },
        {
          text: 'Przedmiotem najmu jest samochód marki ' + this.rental.car.carMarkModel.mark.toUpperCase() +
            ' ' + this.rental.car.carMarkModel.model.toUpperCase() + '\n'
            + ' o numerze rejestracyjnym ' + this.rental.car.registrationNumber.toUpperCase() + '\n',
          style: 'text',
        },
        {
          text: '§2\n\n',
          style: 'subheader'
        },
        {
          text: 'Wynajmujący oddaje w najem Najemcy opisany w §1 samochód na okres:\n'
            + 'Od dnia ' + this.datePipe.transform(this.rental.rentalDate, 'MM/dd/yyyy') + ' godzina 8:00' + '\n' +
            'Do dnia ' + this.datePipe.transform(this.rental.returnDate, 'MM/dd/yyyy') + ' godzina 9:00',
          style: 'text'
        },
        {
          text: '§3\n\n',
          style: 'subheader'
        },
        {
          text: 'Strony najmu ustalają, że czynsz najmu wynosi ' + this.rental.car.carMarkModel.carClass.pricePerNight + ' zł za każdą dobę najmu ' +
            'i za okres najmu samochodu wyniesie ' + this.rental.rentalCost + ' zł.',
          style: 'text'
        },
        {
          text: 'Kaucja zwrotna: ' + this.rental.car.carMarkModel.carClass.deposit + ' zł.',
          style: 'text'
        },
        {
          text: '§4\n\n',
          style: 'subheader'
        },
        {
          text: 'Wynajmujący oświadcza, iż zapoznał się z Regulaminem wypożyczalni oraz akceptuje jego warunki.\n\n',
          style: 'text'
        },

        {
          text: '...................................                                      ...................................',
          style: 'accept'
        },
        {
          text: '         Podpis Najemcy                                              Podpis Wynajmującego\n\n\n',
          style: 'accept'
        },
        {
          text: '"RentCar123" Arun Sood  ' +
            '40-879 Katowice, ul.Ulica 78 ' +
            ' NIP: 980-267-21-34 ' +
            ' REGON: 890392876 ' +
            ' Test Bank 89 2039 8883 8888 2399 1321 8884 ',
          style: ['quote', 'small']
        }
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 16,
          bold: true,
          marginBottom: 20
        },
        company: {
          alignment: 'left',
          fontSize: 11,
          bold: true,
          marginBottom: 5,
          marginTop: 5
        },
        subheader: {
          alignment: 'center',
          fontSize: 11,
          bold: false
        },
        text: {
          alignment: 'left',
          fontSize: 11,
          bold: false,
          marginBottom: 10,
          lineHeight: 1.5
        },
        accept: {
          alignment: 'left',
          fontSize: 11,
          bold: false,
          lineHeight: 1.5
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }

    };
  }


  refresh(): void {
    this.getFiles();
  }

  onRemove(file): void {
    const dialogRef = this.dialog.open(DeleteFileComponent, {
      width: '400px',
      panelClass: 'icon-outside',
      data: file
    });
    dialogRef.afterClosed().subscribe(result => {

      this.file = file;
      this.refresh();
    });
  }
}
