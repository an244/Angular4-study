// B1 VC: import thu vien ViewChild va ChildComponent vo.
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // B2 VC: export ChildComponent
  @ViewChild(ChildComponent)
  // B3 VC: khai bao 1 bien kieu ChildComponent de truy cap
  myChildComponent: ChildComponent;
  // B4 VC: tao 1 function de add
  onAddForChild() {
    this.myChildComponent.valueChild++;
  }
  valueParent = 0;
  constructor() { }
  ngOnInit() {
  }

  // Buoc 3: khai bao func changeValue() da dc su dung o buoc 1.
  changeValue(isAdd: boolean) {
    if (isAdd === true) {this.valueParent += 1; }
    if (isAdd === false) {this.valueParent -= 1; }
   
  }
}
