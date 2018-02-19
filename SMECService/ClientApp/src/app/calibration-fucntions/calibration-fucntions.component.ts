import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calibration-fucntions',
  templateUrl: './calibration-fucntions.component.html',
  styleUrls: ['./calibration-fucntions.component.css']
})
export class CalibrationFucntionsComponent{
  public cf_list: CalibrationFunctions[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<CalibrationFunctions[]>(baseUrl + 'api/CalibrationFunctions').subscribe(result => {
      this.cf_list = result;
    }, error => console.error(error));
  }
}

interface CalibrationFunctions {
  calibrationFunctionsId: number;
  a: number;
  b: number;
  sensorId: number;
  date: DateTimeFormat;
}