import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  test() {
    console.log(sessionStorage.getItem('username'));
    console.log(sessionStorage.getItem('basicauth'));
    return this.authService.test().subscribe();
  }
}
