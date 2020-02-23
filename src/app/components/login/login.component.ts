import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  private emailInput: string;
  private passwordInput: string;

  private onLogin() {
    console.log("Method has been called after form submit");
  }

  ngOnInit() {
  }

}
