import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Unit } from "../models/unit.model";
import { UnitComponent}  from "../UnitComponents/unit/unit.component"



@Injectable()
export class UnitComponentService {
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }


  getData(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl + 'api/Unit');
  }



}
