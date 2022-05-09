import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PERSONS } from 'src/app/personList';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = PERSONS;

  selectedUser?: Person;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(person: Person){
    this.selectedUser = person;
  }
}
