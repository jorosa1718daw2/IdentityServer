import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusService } from '../../services/focus.service';
import { PropertyBindingType } from '@angular/compiler';
import { AnalyzerService } from '../../services/analyzer.service'
import { AnalyzerEditComponent } from "../analyzer-edit/analyzer-edit.component";
import { AnalyzerAddComponent } from "../analyzer-add/analyzer-add.component";
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-analyzer-list',
  templateUrl: './analyzer-list.component.html',
  styleUrls: ['./analyzer-list.component.css']
})
export class AnalyzerListComponent implements OnInit {
  @Input() focusId: number;
  analyzerId: number;
  errorMessage: any;
  focuses: Focus[];

  constructor( public dialog: MatDialog, public http: HttpClient, private _router: Router, private _focusService: FocusService, private route: ActivatedRoute, 
    private _analyzerService: AnalyzerService) {
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(AnalyzerAddComponent, {
      width: '700px'
    });
  dialogRef.afterClosed().subscribe(result => {
    this.refreshData();
  })  
}

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this._focusService.getFocusById(this.focusId)
        .subscribe(data => this.focuses = data )
  }
}

interface Focus {
  focusId: number;
  name: string;
  description: string;
  analyzers: Analyzer[];
}
interface Analyzer {
  analyzerId: number;
  focusId: number
  manufacturer: string;
  model: string;
  serialNumber: string;
}