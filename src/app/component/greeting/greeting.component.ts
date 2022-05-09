import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  userName: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
