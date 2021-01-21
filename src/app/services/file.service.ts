import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {File} from '../models/File';

@Injectable({
  providedIn: 'root'
})
export class FileService {


  constructor(private httpClient: HttpClient) {
  }

  postFile(formData: FormData): Observable<any> {

    return this.httpClient.post<File>('https://localhost:444/files', formData);
  }
  getFiles(): Observable<any> {

    return this.httpClient.get<File[]>('https://localhost:444/files');
  }
}
