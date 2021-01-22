import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/Rental';
import {FileService} from '../../services/file.service';
import {File} from '../../models/File';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  rental: Rental;
  files: File[];
  file: File;

  constructor(private router: Router, private route: ActivatedRoute,
              private rentalService: RentalService,
              private fileService: FileService) {
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


  generateDocuments(): void {
    const documentDefinition = this.getDocumentDefinition();

    pdfMake.createPdf(documentDefinition).download();
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    const formData = new FormData();
    let blob = null;
    pdfDocGenerator.getBuffer((buffer) => {
      blob = new Blob([buffer]);
      console.log(blob);
      formData.append('file', blob, 'umowa_najmu');

      console.log(formData.get('file'));
      this.fileService.postFile(formData).subscribe((response => {
        console.log(response);

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

        'Zawarta w dniu ……………… w ………………………………. pomiędzy:…………………………………………………………zwanym dalej WYNAJMUJĄCYM, a …………………………………………………………………………………….…. ' +
        'zamieszkałym w "………………………………………………………………………………. zwanym dalej NAJEMCĄ.',
        {
          text: '§1',
          style: 'subheader'
        },
        'Wynajmujacy oddaje w najem Najemcy samochód marki ……………………….., koloru………………..., rok produkcji ………………,' +
        'o nr rejestracyjnych ……………………., nr silinka …………………………….., nr nadwozia ………………………………………………wynajmujacy oświadcza, że jest jedynym właścicielem samochodu.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text: '§2',
          style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
          style: ['quote', 'small']
        }
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 18,
          bold: true,
          marginBottom: 20
        },
        subheader: {
          alignment: 'center',
          fontSize: 12,
          bold: true
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

  download(id: string): void {
    this.fileService.getFile(id).subscribe(f => {
      this.file = f;
    });
  }
}
