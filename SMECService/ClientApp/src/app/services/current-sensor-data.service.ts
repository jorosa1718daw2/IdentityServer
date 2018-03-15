import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentAnalogData } from '../models/currentanalogdata.model';
import { Sensor } from '../models/sensor.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentSensorDataService {
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl + 'api/Sensor');
  }

  getSensorsById(sensorId: number): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.baseUrl + 'api/Sensor/' +sensorId);
  }

  deleteSensor(sensorId: number): Observable<Sensor[]>{
    return this.http.get<Sensor[]>(this.baseUrl + 'api/Sensor/' +sensorId);
  }

  getData(sensorId: number): Observable<CurrentAnalogData> {
    return this.http.get<CurrentAnalogData>(this.baseUrl + 'api/Sensor/' + sensorId + '/CurrentAnalogData')
  }
}
