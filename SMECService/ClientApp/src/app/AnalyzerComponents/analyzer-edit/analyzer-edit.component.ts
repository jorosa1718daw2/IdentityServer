import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusComponent } from '../../FocusComponents/focus/focus.component';
import { Analyzer } from '../../models/analyzer.model';
import { AnalyzerService } from '../../services/analyzer.service';

@Component({
  selector: 'app-analyzer-edit',
  templateUrl: './analyzer-edit.component.html',
})
export class AnalyzerEditComponent implements OnInit {
  analyzerAddForm: FormGroup;
  title: string;
  analyzerId: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _analyzerService: AnalyzerService, private _router: Router) {
    if (this._avRoute.snapshot.params["analyzerId"]) {
      this.analyzerId = this._avRoute.snapshot.params["analyzerId"];
    }
    this.analyzerAddForm = this._fb.group({
      analyzerId: 0,
      focusId: 0,
      manufacturer: ['', [Validators.required]],
      model: ['', [Validators.required]],
      serialNumber: ['', [Validators.required]],
      sensors: [''],
      focus: ['']
    })
  }



  ngOnInit() {
    if (this.analyzerId > 0) {
      this.title == "Editar";
      this._analyzerService.getAnalyzerById(this.analyzerId)
        .subscribe(resp => this.analyzerAddForm.setValue(resp),
        error => this.errorMessage = error);
    }
  }
  save() {
    if (this.title == "Editar") {
      this._analyzerService.UpdateAnalyzer(this.analyzerAddForm.value)
        .subscribe((data) => {
          this._router.navigate(['/focus']);
        }, error => this.errorMessage = error)
    }
  }
  cancel() {
    this._router.navigate(['/focus']);
  }

  delete(analyzerId) {
    var ans = confirm("¿ Seguro que quieres elminar este Analizador con el ID : " + analyzerId + "?");
    if (ans) {
      this._analyzerService.deleteAnalyzer(analyzerId)
        .subscribe((data) => {
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
