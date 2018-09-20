import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(value){
    // 'https://ibiboflights.herokuapp.com/api'
    console.log('value', value);
    return this.http.post( environment.USER_SERVER + '/getFlightDetails', value).map( 
      (response) => response.json())
        .catch(e => {
          if (e.status === 401) {
            console.log('Error');
          }
          return [];
        });
  }


}