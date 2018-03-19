import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Focus } from '../models/focus.model';
import { Observable } from 'rxjs/Observable';
import { Analyzer } from '../models/analyzer.model';
import { BehaviorSubject} from 'rxjs/Rx';




@Injectable()
export class FocusService {
  baseUrl: string;
  analyzers: Analyzer[];
  focusId: number;

  private focuses: Focus[];
  private focusesSubject = new BehaviorSubject([]);

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getData(): Observable<Focus[]> {
   return this.http.get<Focus[]>(this.baseUrl + 'api/Focus');
  }


  getFocusById(focusId): Observable<Focus[]>{
    return this.http.get<Focus[]>(this.baseUrl + 'api/Focus/' + focusId);
  }

  saveFocus(name){
    return this.http.post(this.baseUrl + 'api/Focus/Create', name);
  }



  UpdateFocus(name) {
    return this.http.put(this.baseUrl + 'api/Focus/', name);
  }

  deleteFocus(focusId): Observable<Focus[]>{
    return this.http.delete<Focus[]>(this.baseUrl + 'api/Focus/' + focusId);
  }

}
