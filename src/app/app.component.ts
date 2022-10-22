import { Component,OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent {
  titulo = 'Listado de personas';
  
  ngOnInit():void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAsNIvqWopnYwOjgNc5dQAjOGOyp4osfD0',
      authDomain: 'listado-personas-7feb6.firebaseapp.com',
    });
  }

}
