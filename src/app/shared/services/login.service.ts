import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private localStorage: LocalStorageService
  ) {}

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/login']);
      })
      .catch((erreur) => {
        console.log(erreur);
      });
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  isAuthenticated() {
    if (this.localStorage.get('user')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this.localStorage.clear();
  }
}
