import {Car} from './Car';
import {Employee} from './Employee';
import {Customer} from './Customer';
import {File} from './File';

export class Rental {
  id: number;
  rentalDate: Date;
  returnDate: Date;
  status: string;
  car: Car;
  employee: Employee;
  customer: Customer;
  rentalCost: number;
}
