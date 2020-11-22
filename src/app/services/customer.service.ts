import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';
import {Customer} from '../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {

    return this.httpClient.get<Customer[]>('https://localhost:444/customers');

  }


  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('https://localhost:444/customers', customer, {headers: this.headers});

  }
}
