// Exercise Instructions:
// 1. Update changeName() to instead set the value of the lastNameControl
// 2. Optional: Alter the value that is being set to something else to your liking

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boss = 'Edward';

  firstNameControl = new FormControl('First');
  lastNameControl = new FormControl('Last');

  hide: boolean = false;

  constructor() {}

  changeName() {
    this.firstNameControl.setValue('Edward');
    this.lastNameControl.setValue('Gazit');
  }

  resetName() {
    this.firstNameControl.setValue('F. Name resetted');
    this.lastNameControl.setValue('L. Name resetted');
  }

  hidePicture() {
    this.hide = !this.hide;
    return this.hide;
  }
}
