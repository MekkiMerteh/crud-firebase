import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/']);
      })

      .catch((erreur) => {
        console.log(erreur);
      });
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
    return this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert('check you email');
    });
  }
}
