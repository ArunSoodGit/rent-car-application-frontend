import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {File} from '../models/File';
import {Rental} from '../models/Rental';

@Injectable({
  providedIn: 'root'
})
export class FileService {



  constructor(private httpClient: HttpClient) {
  }

  postFile(formData: FormData): Observable<File> {

    return this.httpClient.post<File>('https://localhost:444/files', formData );
  }

  getFiles(): Observable<File[]> {

    return this.httpClient.get<File[]>('https://localhost:444/files');
  }

  getFile(id: string): Observable<any> {
    const url = `https://localhost:444/files/${id}`;
    return this.httpClient.get(url, {responseType: 'text'});
  }

}
