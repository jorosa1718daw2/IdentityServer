import { Component } from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { Router } from "@angular/router";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor (public auth: AuthService, private router: Router){

  }
  logout(): boolean {
    // logs out the user, then redirects him to Home View.
    if (this.auth.logout()) {
    this.router.navigate(["fetch-data"]);
    }
    return false;
    }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
