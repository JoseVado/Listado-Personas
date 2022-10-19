import { Component,OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas';
  personas: Persona[] = [];

  constructor(private personasService: PersonasService){}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
  /*
  personaAgregada(persona:Persona) {
    //this.personas.push(persona);

    this.personasService.personaAgregada(persona);
  }*/
}
