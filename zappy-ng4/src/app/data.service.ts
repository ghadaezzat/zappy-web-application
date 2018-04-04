import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;

  constructor(private _http:Http) { }

  getPosts() {
    return this._http.get("http://localhost:5000/view")
      .map(result => this.result = result.json());
  }
}
