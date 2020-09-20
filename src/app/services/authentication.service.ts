import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) {
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<User>('https://localhost:444/validateLogin', {headers}).pipe(
      map(
        userData => {
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          sessionStorage.setItem('username', username);
          return userData;
        }
      )
    );
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
 //   console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
