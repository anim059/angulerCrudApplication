import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/Users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Users[];
  name!: string;
  emotional!:string;
  showSad: boolean = true;
  color: string = 'yellow';
  constructor() { 
    this.users = [
      {
        name: "adnan",
        emotional: "happy"
      },
      {
        name: "hoq",
        emotional: "happy"
      },
      {
        name: "rahman",
        emotional: "sad"
      }
    ];
  }
  
  userLogin!: string;
  

  ngOnInit(): void {
  }

}
