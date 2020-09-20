import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ClientsService} from '../services/clients.service';
import {Client} from '../Client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  customer = new Client();

  constructor(private service: ClientsService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onSubmit(customer: Client) {
  //  this.service.addCustomer(customer);
    console.log(customer);
    this.snackBar.open('Employee added successful', 'OK', {
      duration: 2000,
    });
  }

}
