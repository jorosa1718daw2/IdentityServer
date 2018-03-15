import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusComponent } from '../focus/focus.component';
import { Focus } from '../../models/focus.model';
import { FocusService } from '../../services/focus.service';


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
  show: boolean = false;

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
  }
  save() {
    if (!this.focusAddForm.valid) {
      return;
    }
    if (this.title == "Crear") {
      this._focusService.saveFocus(this.focusAddForm.value)
        .subscribe((data) => {
          if(this.focusAddForm.valid){
            var ans = confirm("Foco: " + name + "," + this.focusId+ "añadido correctamente!");
          }
         this._router.navigate(['/focus']);
        }, error => this.errorMessage = error)
    }

  }
  cancel() {
    this._router.navigate(['/focus']);
  }


  //focus
  get name() { return this.focusAddForm.get('name'); }
  get description() { return this.focusAddForm.get('description'); }
  get focus_Id() { return this.focusAddForm.get('id'); }



}
