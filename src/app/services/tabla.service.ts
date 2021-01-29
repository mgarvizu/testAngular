import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  urlData = '/api/posts';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.urlData);
  }
}
