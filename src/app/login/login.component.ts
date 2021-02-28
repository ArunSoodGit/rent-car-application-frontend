import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  submitted = false;
  invalidLogin = false;
  invalidateClass = '';
  loginForm: FormGroup;
  @Input() error: string | null;

  constructor(private router: Router, private authService: AuthenticationService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  checkLogin(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    (this.authService.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['cars']);
          this.invalidLogin = false;
          this.invalidateClass = 'yes';
          this.snackBar.open('Zalogowano pomyślnie', 'OK', {
            duration: 5000,

          });
        },
        error => {
          this.invalidLogin = true;
          this.invalidateClass = 'invalid-feedback';

          this.snackBar.open('Wprowadzono niepoprawny identyfikator lub hasło!', 'OK', {
            duration: 5000,

          });
        }
      )
    );
  }


}
