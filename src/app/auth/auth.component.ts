import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    public loginService: LoginService,
    public router: Router,
    private localStorage: LocalStorageService,
    public translate: TranslateService
  ) {
   
  }
  email: string;
  password: string;

  ngOnInit(): void {}
  login() {
    this.loginService
      .signIn(this.email, this.password)
      .then((result) => {
        this.router.navigate(['/']);
        this.localStorage.set('user', result.user.email);
      })

      .catch((erreur) => {
        console.log(erreur);
      });
  }

  resetPwd() {
    this.loginService.resetPassword(this.email).then(() => {
      alert('check you email');
    });
  }
}
