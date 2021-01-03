import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {jsPDF} from 'jspdf';
import {FileService} from '../services/file.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
  @ViewChild('htmlData', {static: true}) htmlData: ElementRef;

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  public convertToPDF(): void {
    const DATA = this.htmlData.nativeElement;
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.html(DATA, {
      callback: (doc) => {
        // doc.output('dataurlnewwindow');
        doc.save('Umowa_najmu');
      }
    });
    const blob = pdf.output('blob');
    const formData = new FormData();
    formData.append('file', blob);
    console.log(blob);
    console.log(formData.get('file'));
    this.fileService.postFile(formData).subscribe((response => {
      console.log(response);

    }));


  }
}
