import {Car} from './Car';
import {Employee} from './Employee';
import {Customer} from './Customer';

export class Rental{
  id: number;
  rentalDate: Date;
  returnDate: Date;
  car: Car;
  employee: Employee;
  customer: Customer;
  rentalCost: number;
}
