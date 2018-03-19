import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusEditComponent } from "../../FocusComponents/focus-edit/focus-edit.component";
import { AnalyzerListComponent } from "../analyzer-list/analyzer-list.component";
import { Analyzer } from '../../models/analyzer.model';
import { AnalyzerService } from '../../services/analyzer.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-analyzer-add',
  templateUrl: './analyzer-add.component.html',

})
//analyzer component con dialogo
export class AnalyzerAddComponent implements OnInit {
  @Input() focusId: number;
  focuses: Focus[];
  analyzerAddForm: FormGroup;
  title: string = "Añadir";
  analyzerId: number;
  errorMessage: any;

  constructor(public snackBar: MatSnackBar, public dialogRef: MatDialogRef<AnalyzerAddComponent>,private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _analyzerService: AnalyzerService, private _router: Router) {
    if (this._avRoute.snapshot.params["analyzerId"]) {
      this.analyzerId = this._avRoute.snapshot.params["analyzerId"];
    }
    this.analyzerAddForm = this._fb.group({
      focusId: 0,
      manufacturer: ['', [Validators.required]],
      model: ['', [Validators.required]],
      serialNumber: ['', [Validators.required]]
    })
  }

  openSnackBar() {
    this.snackBar.openFromComponent(snackBarComponent, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }
  save() {
    if (!this.analyzerAddForm.valid) {
      return;
    }
    if (this.title == "Añadir") {
      this._analyzerService.saveAnalyzer(this.analyzerAddForm.value)
        .subscribe((data) => {
          if(this.analyzerAddForm.valid){
            this.openSnackBar(); // REVISAR
           // var ans = confirm("Analizador: " + this.analyzerAddForm.value.model + " añadido correctamente!");
          }
        }, error => this.errorMessage = error)
    }
  }
 
  get focus_Id() { return this.analyzerAddForm.get('focusId'); }
  get analyzer_Id() { return this.analyzerAddForm.get('analyzerId'); }
  get manufacturer() { return this.analyzerAddForm.get('manufacturer'); }
  get model() { return this.analyzerAddForm.get('model'); }
  get serialNumber() { return this.analyzerAddForm.get('serialNumber'); }




}
interface Focus {
  focusId: number;
  name: string;
  description: string;
  analyzers: Analyzer[];
}

@Component({
  templateUrl: 'snack-bar.component.html',
})
export class snackBarComponent {}

