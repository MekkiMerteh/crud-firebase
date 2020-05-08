import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';
import { LocalStorageService } from 'ngx-localstorage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userConnected: string;
  constructor(
    public loginService: LoginService,
    private localStorage: LocalStorageService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {
    this.userConnected = this.localStorage.get('user');
  }
  logout() {
    this.loginService.logout();
  }
}
