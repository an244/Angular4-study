import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(1988, 3, 24);
  person = {name: 'Thien An', age: 29};
  constructor() { }

  ngOnInit() {
  }

}
