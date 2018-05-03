import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  getGeneral() {
    return this.http.get('assets/data.json');
  }

}


