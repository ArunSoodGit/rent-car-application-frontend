import {Car} from './Car';
import {Employee} from './Employee';
import {Customer} from './Customer';
import {File} from './File';
import {Status} from '../Status';

export class Rental {
  id: number;
  rentalDate: Date;
  returnDate: Date;
  status: Status;
  car: Car;
  employee: Employee;
  customer: Customer;
  rentalCost: number;
}
