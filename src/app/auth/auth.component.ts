import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(public loginService: LoginService) {}
  email: string;
  password: string;

  ngOnInit(): void {}
  login() {
    this.loginService.signIn(this.email, this.password);
  }

  resetPwd() {
    this.loginService.resetPassword(this.email);
  }
}
