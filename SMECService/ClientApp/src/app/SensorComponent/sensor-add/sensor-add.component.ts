import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusComponent } from '../../FocusComponents/focus/focus.component';
import { Sensor } from "../../models/sensor.model";
import { CurrentSensorDataService } from "../../services/current-sensor-data.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MeasuringComponentService } from "../../services/measuring-component.service";
import { MeasuringComponentModel } from "../../models/measuringcomponent.model";

import { Observable } from 'rxjs/Observable';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-sensor-add',
  templateUrl: './sensor-add.component.html',
  styleUrls: ['./sensor-add.component.css']
})
export class SensorAddComponent implements OnInit {
  @Input() focusId: number;
  @Input() analyzerId: number;
  sensors: Sensor[];
  sensorAddForm: FormGroup;
  title: string = "Añadir";
  sensorId: number;
  errorMessage: any;

 /**Nested Forms -> sensorComponent, MeasuringComponent, unitComponent*/

  constructor(public dialogRef: MatDialogRef<SensorAddComponent>, private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _sensorService: CurrentSensorDataService, private _router: Router) {
    if (this._avRoute.snapshot.params["analyzerId"]) {
      this.sensorId = this._avRoute.snapshot.params["analyzerId"];
    }
    this.sensorAddForm = this._fb.group({
      analyzerId: 0,
      measuringComponentId: ['', [Validators.required]],
      unitId: ['', [Validators.required]]



    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

  save() {
    if (!this.sensorAddForm.valid) {
      return;
    }
    if (this.title == "Añadir") {
      this._sensorService.saveSensor(this.sensorAddForm.value)
        .subscribe((data) => {
          if(this.sensorAddForm.valid){
           var ans = confirm("Sensor añadido correctamente!");
          }
        }, error => this.errorMessage = error)
    }
  }

  get analyzer_Id() { return this.sensorAddForm.get('analyzerId'); }
  get measuringComponent_Id() { return this.sensorAddForm.get('measuringComponentId'); }
  get unit_Id() { return this.sensorAddForm.get('unitId'); }


  

}
