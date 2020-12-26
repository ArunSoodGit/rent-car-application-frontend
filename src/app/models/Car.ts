import {CarMarkModel} from './CarMarkModel';

export class Car {
  vin: string;
  registrationNumber: string;
  mileage: number;
  color: string;
  engineCapacity: number;
  review: string;
  isAvailable: boolean;
  imagePath: string;
  dateOfProduction: Date;
  carMarkModel: CarMarkModel = new CarMarkModel();

}
