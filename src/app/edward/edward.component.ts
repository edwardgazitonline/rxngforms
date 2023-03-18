import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-edward',
  templateUrl: './edward.component.html',
  styleUrls: ['./edward.component.css']
})
export class EdwardComponent implements OnInit {
  edwardsname:string;
  

  constructor() {
    this.edwardsname = "Genius"
   }

  ngOnInit() {
  }

}