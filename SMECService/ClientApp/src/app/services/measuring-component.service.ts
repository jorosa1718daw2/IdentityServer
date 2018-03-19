import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MeasuringComponentModel } from "../models/measuringcomponent.model";
import 'rxjs/add/operator/map';
import { MeasuringComponent } from '../measuringComponents/measuring/measuring.component';

@Injectable()
export class MeasuringComponentService {
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }


  getData(): Observable<MeasuringComponentModel[]> {
    return this.http.get<MeasuringComponentModel[]>(this.baseUrl + 'api/measuringcomponent');
  }

  saveMeasruing(name){
    return this.http.post(this.baseUrl + 'api/measuringcomponent', name);
  }



}
