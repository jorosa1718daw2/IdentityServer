import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Analyzer } from '../models/analyzer.model';
import { Focus } from '../models/focus.model';

@Injectable()
export class AnalyzerService {
  baseUrl: string;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getData(): Observable<Analyzer[]> {
    return this.http.get<Analyzer[]>(this.baseUrl + 'api/Analyzer');
  }

  getAnalyzerById(analyzerId): Observable<Analyzer[]>{
    return this.http.get<Analyzer[]>(this.baseUrl + 'api/Analyzer/' + analyzerId);
  }



  saveAnalyzer(model){
    return this.http.post(this.baseUrl + 'api/Analyzer', model);
  }


  
  UpdateAnalyzer(model) {
    return this.http.put(this.baseUrl + 'api/Analyzer/', model);
  }

  deleteAnalyzer(analyzerId): Observable<Analyzer[]> {
    return this.http.delete<Analyzer[]>(this.baseUrl + 'api/Analyzer/' + analyzerId);
  }


}
