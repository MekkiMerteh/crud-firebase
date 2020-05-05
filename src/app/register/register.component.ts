import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  createUser() {
    this.loginService.signUp(this.email, this.password);
  }
}
