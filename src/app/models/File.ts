import {Rental} from './Rental';

export class File {
  id: number;
  name: string;
  type: string;
  data: Blob;
  rental: Rental;

}
