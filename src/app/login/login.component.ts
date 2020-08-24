import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  invalidLogin = false;
  @Input() error: string | null;

  constructor(private router: Router, private authService: AuthenticationService) {

  }



  checkLogin() {
    (this.authService.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
        }
      )
    );
  }

}
