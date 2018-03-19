import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { UnitComponentService } from "../../services/unit.service";
import { Unit } from "../../models/unit.model";
import { NgForm, FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';


import { Observable } from 'rxjs/Observable';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitCtrl: FormControl;
  filteredUnits: Observable<any[]>;
  units: Unit[];
  @Input() sensorAddForm: FormGroup;


  constructor(private _fb: FormBuilder, public http: HttpClient, private _router: Router, private _unitService: UnitComponentService) {
    this.unitCtrl = new FormControl();
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
    this._unitService.getData().subscribe(unit=>{
      this.units = unit;
      this.filteredUnits = this.unitCtrl.valueChanges
      .pipe( 
        startWith(''),
        map(unit => unit ? this.filterMeasuring(unit) : this.units.slice(0))
      );
    });
  }

  filterMeasuring(name: string) {
    return this.units.filter(measuring =>
      measuring.name.toLowerCase().indexOf(name.toLowerCase()) === 0);

  }

}
