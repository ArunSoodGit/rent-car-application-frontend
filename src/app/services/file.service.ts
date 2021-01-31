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

  getFilesForRental(id: string): Observable<File[]> {
    const url = `https://localhost:444/rentals/${id}/files`;
    return this.httpClient.get<File[]>(url);
  }

  deleteFile(id: number): Observable<File>{
    const url = `https://localhost:444/files/${id}`;
    return this.httpClient.delete<File>(url);
  }
}
