import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Car} from '../models/Car';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('https://localhost:444/cars');
  }
  getCarByVin(vin): Observable<Car> {
    const url = `https://localhost:444/cars/${vin}`;
    return this.httpClient.get<Car>(url);
  }

  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>('https://localhost:444/cars', car, {headers: this.headers});
  }
  updateCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>('https://localhost:444/cars', car, {headers: this.headers})
     ;
  }
  deleteCar(vin): Observable<Car> {
    const url = `https://localhost:444/cars/${vin}`; // DELETE api/heroes/42
    return this.httpClient.delete<Car>(url, {headers: this.headers});
  }
}
