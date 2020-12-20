import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';
import {Rental} from '../models/Rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }



  getRentals(): Observable<Rental[]> {return this.httpClient.get<Rental[]>('https://localhost:444/rentals');

  }
  addRental(rental: Rental): Observable<Rental> {
    return this.httpClient.post<Rental>('https://localhost:444/rentals', rental, {headers: this.headers});
  }
}
