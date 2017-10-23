// Buoc 4: phai them Output va EvenEmitter de lang nghe va lay su kien tu component nay 
//sang component khac
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //Buoc 5: gan su kien o Buoc 1 vao @Output
  @Output() myClickEventFromParent = new EventEmitter();

  //Buoc 6: khai bao su kien o Buoc 2
  ChildClickForParent(){
    this.myClickEventFromParent.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
