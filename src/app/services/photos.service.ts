import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }


  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
  }


}
