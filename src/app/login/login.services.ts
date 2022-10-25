import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable()
export class LoginService {
  token: string | null;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    firebase
      .signInWithEmailAndPassword(firebase.getAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        userCredential.user.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['personas']);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  getIdToken() {
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  logOut() {
      firebase.signOut(firebase.getAuth()).then(() => {
          this.token = null;
          this.router.navigate(['login']);
      }).catch(error => console.log("error logut: " + error)
      );
  }
}
