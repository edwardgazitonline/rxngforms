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
  firstNameControl = new FormControl('First');
  lastNameControl = new FormControl('Last');
  pic: string =
    'https://dbkh.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/11/16114615/Pacific-Zircon-15.11.22.jpg';

  Image: string =
    'https://dbkh.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/11/14131816/Karrar-drone-800x445.jpg';
  
    hide: boolean;

  constructor() {}

  changeName() {
    this.firstNameControl.setValue('Initial' + ' EdwardGazitsFirstName');
    this.lastNameControl.setValue('edwardsLastName');
   
  }
  hidePpicture(){
    this.hide = true;
  };
}

function hidePicture() {
throw new Error('Function not implemented.');
}
