import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FileService} from '../services/file.service';
import {File} from '../models/File';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss']
})
export class DeleteFileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteFileComponent>, private snackBar: MatSnackBar, private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: File, private fileService: FileService) {
  }


  ngOnInit(): void {

  }

  onRemove(): void {

    this.fileService.deleteFile(this.data.id).subscribe(
      data => {
        console.log(this.data.rental.id);

      }
    );

    this.dialogRef.close();
    this.snackBar.open('Usuwanie zakończone pomyślnie', 'OK', {
      duration: 2000,
    });

  }

}
