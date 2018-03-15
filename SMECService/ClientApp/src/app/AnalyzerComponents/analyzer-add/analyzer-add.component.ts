import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusComponent } from '../../FocusComponents/focus/focus.component';
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
  show: boolean = false;
  analyzerAddForm: FormGroup;
  title: string = "Crear";
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
    if (this.analyzerId > 0) {
      this.title = "Editar";
      this._analyzerService.getAnalyzerById(this.analyzerId)
        .subscribe(resp => this.analyzerAddForm.setValue(resp),
        error => this.errorMessage = error);
    }
  }
  save() {
    if (!this.analyzerAddForm.valid) {
      return;
    }
    if (this.title == "Crear") {
      this._analyzerService.saveAnalyzer(this.analyzerAddForm.value)
        .subscribe((data) => {
          if(this.analyzerAddForm.valid){
            this.openSnackBar(); // REVISAR
           // var ans = confirm("Analizador: " + this.analyzerAddForm.value.model + " añadido correctamente!");
          }
        }, error => this.errorMessage = error)
    }
  }
 
  delete(analyzerId){
    var ans = confirm("¿ Seguro que quieres elminar este Analizador con el ID : " +analyzerId+ "?");
    if (ans){
      this._analyzerService.deleteAnalyzer(analyzerId)
      .subscribe((data)=> {
        this._router.navigate(['/focus']);
      }, error => console.error(error))
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

// Analyzer component sin dialogo
@Component({
  selector: 'app-analyzer-add2',

  templateUrl: 'analyzer-add2.component.html',
})
export class AnalyzerAddComponent2 {
  @Input() focusId: number;
  focuses: Focus[];
  show: boolean = false;
  analyzerAddForm: FormGroup;
  title: string = "Crear";
  analyzerId: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
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

  ngOnInit() {
    if (this.analyzerId > 0) {
      this.title = "Editar";
      this._analyzerService.getAnalyzerById(this.analyzerId)
        .subscribe(resp => this.analyzerAddForm.setValue(resp),
        error => this.errorMessage = error);
    }
  }
  save() {
    if (!this.analyzerAddForm.valid) {
      return;
    }
    if (this.title == "Crear") {
      this._analyzerService.saveAnalyzer(this.analyzerAddForm.value)
        .subscribe((data) => {
          if(this.analyzerAddForm.valid){
           var ans = confirm("Analizador: " + this.analyzerAddForm.value.model + " añadido correctamente!");
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
