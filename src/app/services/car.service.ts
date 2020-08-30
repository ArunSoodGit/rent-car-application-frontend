import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../models/Car';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {

    return this.httpClient.get<Car[]>('http://localhost:8080/cars');

  }

  getAvailableCars(): Observable<Car[]> {

    return this.httpClient.get<Car[]>('http://localhost:8080/available-cars');

  }

  addCar(car: Car): Observable<Car> {
    console.log('test');
    return this.httpClient.post<Car>('http://localhost:8080/add-car', car, {headers: this.headers});
  }
}
