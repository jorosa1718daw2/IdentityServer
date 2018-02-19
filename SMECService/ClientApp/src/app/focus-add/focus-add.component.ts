import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';   
@Component({
  selector: 'app-focus-add',
  templateUrl: './focus-add.component.html',
  styleUrls: ['./focus-add.component.css']
})
export class FocusAddComponent implements OnInit {
  focusAddForm: FormGroup;
  focusId: number;
  errorMessage: any;

  constructor() { }

  ngOnInit() {
  }

}
