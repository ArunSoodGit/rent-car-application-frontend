import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
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

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>('https://localhost:444/customers', customer, {headers: this.headers});
  }

  deleteCustomer(driverLicenseNumber): Observable<Customer> {
    const url = `https://localhost:444/customers/${driverLicenseNumber}`;
    return this.httpClient.delete<Customer>(url, {headers: this.headers});
  }

  getCustomerByDriverLicenceNumber(driverLicenseNumber): Observable<Customer> {
    const url = `https://localhost:444/customers/${driverLicenseNumber}`;
    return this.httpClient.get<Customer>(url);
  }
}
