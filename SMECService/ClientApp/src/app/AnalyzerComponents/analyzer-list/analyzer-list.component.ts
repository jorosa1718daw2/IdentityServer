import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusService } from '../../services/focus.service';
import { PropertyBindingType } from '@angular/compiler';
import { AnalyzerService } from '../../services/analyzer.service'
import { AnalyzerEditComponent } from "../analyzer-edit/analyzer-edit.component";

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



  constructor(private analyzerEdit: AnalyzerEditComponent, public http: HttpClient, private _router: Router, private _focusService: FocusService, private route: ActivatedRoute, private _analyzerService: AnalyzerService) {
  }

  ngOnInit() {
    this.refrehData();
  }

  refrehData(){
    this._focusService.getFocusById(this.focusId)
        .subscribe(data => this.focuses = data )
  }

  delete(analyzerId){
    var ans = confirm("¿ Seguro que quieres elminar este Analizador con el ID : " +analyzerId+ "?");
    if (ans){
      this._analyzerService.deleteAnalyzer(analyzerId)
      .subscribe((data)=> {
      }, error => console.error(error))
    }
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