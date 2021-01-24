import {Rental} from './Rental';

export class File {
  id: string;
  name: string;
  type: string;
  data: Blob;
  rental: Rental;

}
