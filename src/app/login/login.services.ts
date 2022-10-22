import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';

@Injectable()
export class LoginService{
    token: string;

    constructor(private router: Router) {
        
    }
    /*
    login(email: string, password: string) {
        alert(
            firebase.auth.EmailAuthProvider.credential(email, password).toJSON);
        
        this.router.navigate(['/']);
    }*/

    getIdToken() {
        return this.token;
    }
   
}