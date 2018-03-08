import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusService } from '../../services/focus.service';


@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html'
})
export class FocusComponent implements OnInit {
  public focus_list: Focus[];
  interval: any;

  constructor(public http: HttpClient, private _router: Router, private _focusService: FocusService){
    this.getFocus();
  }
  ngOnInit(): void {
    this.getFocus();
    this.interval = setInterval(() => {
      this.getFocus();
    }, 5000);
  }


  getFocus(){
    this._focusService.getData().subscribe(
      data => this.focus_list = data
    )
  }

  delete(focusId){
    var ans = confirm("¿ Seguro que quieres elminar este Foco con el ID : " +focusId+ "?");
    if (ans){
      this._focusService.deleteFocus(focusId)
      .subscribe((data)=> {
        this.getFocus();
      }, error => console.error(error))
    }
  }

  
  }


interface Analyzer {
  manufacturer: string;
  model: string;
  serialNumber: string;
}


interface Focus {
  focusId: number;
  name: string;
  description: string;
  analyzers: Analyzer[];
}



