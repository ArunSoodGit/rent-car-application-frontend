import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authenticationService.logOut();
    this.snackBar.open('Wylogowano pomyślnie', 'OK', {
      duration: 5000,
      panelClass: 'success-dialog'
    });
    this.router.navigate(['login']);
  }

}
