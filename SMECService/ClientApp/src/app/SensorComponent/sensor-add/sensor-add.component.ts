import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusComponent } from '../../FocusComponents/focus/focus.component';
import { Sensor } from "../../models/sensor.model";
import { CurrentSensorDataService } from "../../services/current-sensor-data.service";

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
  title: string = "crear";
  sensorId: number;
  errorMessage: any;
  
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
  private _sensorService: CurrentSensorDataService, private _router: Router ) {
    if (this._avRoute.snapshot.params["sensorId"]){
      this.sensorId = this._avRoute.snapshot.params["sensorId"];
    }
    this.sensorAddForm = this._fb.group({
      focusId:0,
      analyzerId: 0,
      measuringComponent: ['', [Validators.required]],
      unit: ['', [Validators.required]]

      

    })
    }

  ngOnInit() {
  }

}
