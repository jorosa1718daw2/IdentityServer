import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyBindingType } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';

import { CurrentSensorDataService } from "../../services/current-sensor-data.service";
import { AnalyzerService } from '../../services/analyzer.service'
import { Analyzer } from "../../models/analyzer.model";
import { Sensor } from "../../models/sensor.model";
import { Unit } from "../../models/unit.model";
import { MeasuringComponentModel } from "../../models/measuringcomponent.model";
import { SensorAddComponent } from "../sensor-add/sensor-add.component";

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  @Input() analyzerId: number;
  sensorId: number;
  errorMessage: any;
  analyzers: Analyzer[];


  constructor(public dialog: MatDialog, public http: HttpClient, private _router: Router, private route: ActivatedRoute,
    private _analyzerService: AnalyzerService, _sensorService: CurrentSensorDataService) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(SensorAddComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshData();
    })
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this._analyzerService.getAnalyzerById(this.analyzerId)
      .subscribe(data => this.analyzers = data)
  }

}

