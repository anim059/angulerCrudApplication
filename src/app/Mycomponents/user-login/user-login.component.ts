import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private login!: string;
  message!:string;
  get loggedIn():string{
    return this.login;
  }
  @Input()
  set loggedIn(value:string){
    this.login=value;
    if(this.login=='true'){
      this.message = "welcome anim"
    }else{
      this.message = "please login first"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
