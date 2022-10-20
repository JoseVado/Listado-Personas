import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personasService: PersonasService) {}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
  /*
  personaAgregada(persona:Persona) {
    //this.personas.push(persona);

    this.personasService.personaAgregada(persona);
  }*/
}