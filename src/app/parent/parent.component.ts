import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  value = 0;
  constructor() { }
  ngOnInit() {
  }

  //Buoc 3: khai bao func changeValue() da dc su dung o buoc 1.
  changeValue(isAdd: boolean) {
    if(isAdd=== true) {this.value += 1};
    if(isAdd=== false) {this.value -= 1};
   
  }
}
