import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { MeasuringComponentService } from "../../services/measuring-component.service";
import { MeasuringComponentModel } from "../../models/measuringcomponent.model";

import { Observable } from 'rxjs/Observable';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';



@Component({
  selector: 'app-measuring',
  templateUrl: './measuring.component.html',
  styleUrls: ['./measuring.component.css']
})
export class MeasuringComponent implements OnInit{
  stateCtrl: FormControl;
  filteredMeasurings: Observable<any[]>;
  measurings: MeasuringComponentModel[];
  @Input() sensorAddForm: FormGroup;

  constructor(private _fb: FormBuilder, public http: HttpClient, private _router: Router, private _measuringService: MeasuringComponentService) {
    this.stateCtrl = new FormControl();
    this.sensorAddForm = this._fb.group({
      analyzerId: 0,
      measuringComponentId: ['', [Validators.required]],
      unitId: ['', [Validators.required]]
    })
   
    
     
  }

  ngOnInit(){
    this.refrashData();
  }

 refrashData(){
    this._measuringService.getData().subscribe(measuring=>{
      this.measurings = measuring;
      this.filteredMeasurings = this.stateCtrl.valueChanges
      .pipe( 
        startWith(''),
        map(measuring => measuring ? this.filterMeasuring(measuring) : this.measurings.slice(0))
      );
    });
  }



  filterMeasuring(name: string) {
    return this.measurings.filter(measuring =>
      measuring.name.toLowerCase().indexOf(name.toLowerCase()) === 0);

  }



}
