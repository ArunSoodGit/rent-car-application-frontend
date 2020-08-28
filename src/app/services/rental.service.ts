import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';
import {Rental} from '../models/Rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  constructor(private httpClient: HttpClient) {
  }



  getRentals(): Observable<Rental[]> {

    return this.httpClient.get<Rental[]>('http://localhost:8080/rentals');

  }
}
