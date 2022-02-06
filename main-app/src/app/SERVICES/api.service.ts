import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _jsonURL = '../../../assets/DATA/products.json';

  constructor(private Http: HttpClient) {}

  //we need to convert this function into an observable. Because other functions depends on it. other functions have to wait for it to complete its implementation before they execute theirs
  getJson(): Observable<any> {
    return this.Http.get(this._jsonURL);
  }
}
