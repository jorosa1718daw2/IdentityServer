import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusComponent } from '../focus/focus.component';
import { Focus } from '../models/focus.model';
import { FocusService } from '../services/focus.service';



@Component({
  selector: 'app-focus-add',
  templateUrl: './focus-add.component.html',
  styleUrls: ['./focus-add.component.css']
})
export class FocusAddComponent implements OnInit {
  focusAddForm: FormGroup;
  title: string = "Crear"
  focusId: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _focusService: FocusService, private _router: Router) {
    if (this._avRoute.snapshot.params["focusId"]) {
      this.focusId = this._avRoute.snapshot.params["focusId"];
    }
    this.focusAddForm = this._fb.group({
      focusId: 0,
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      //analyzers: ['', [Validators.required]]
    })
  }


  ngOnInit() {
    if (this.focusId > 0) {
      this.title = "Editar";
      this._focusService.getFocusById(this.focusId)
        .subscribe(resp => this.focusAddForm.setValue(resp),
        error => this.errorMessage = error);
    }
  }
  save() {
    if (!this.focusAddForm.valid) {
      return;
    }
    if (this.title == "Crear") {
      this._focusService.saveFocus(this.focusAddForm.value)
        .subscribe((data) => {
          this._router.navigate(['/focus']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Editar") {
      this._focusService.UpdateFocus(this.focusAddForm.value)
        .subscribe((data) => {
          this._router.navigate(['/focus']);
        }, error => this.errorMessage = error)
              
    }
  }
  cancel() {
    this._router.navigate(['/focus']);
  }

  delete(focusId){
    var ans = confirm("¿ Seguro que quieres elminar este Foco con el ID : " +focusId+ "?");
    if (ans){
      this._focusService.deleteFocus(focusId)
      .subscribe((data)=> {
        this._router.navigate(['/focus']);
      }, error => console.error(error))
    }
  }

  //focus
  get name() { return this.focusAddForm.get('name'); }
  get description() { return this.focusAddForm.get('description'); }
  get focus_Id() { return this.focusAddForm.get('id'); }



}
