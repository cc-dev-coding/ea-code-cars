import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../..//environments/environment';

@Injectable()
export class CarshowService {

  constructor(private http: HttpClient) { }

  getCarShows(): Observable<any> {
    const url = `${environment.serverUrl}/makes` ;
    return this.http.get(url);
  }


}
