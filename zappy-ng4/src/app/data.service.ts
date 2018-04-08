import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;

  constructor(private _http:Http) { }

  getPosts() {
    return this._http.get("http://zappy-app.openode.io/view")
      .map(result => this.result = result.json());
  }
}
