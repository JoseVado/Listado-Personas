import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable() 
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Carla', 'Lara'),
    ];
    
    saludar = new EventEmitter<number>();

  constructor(private loggingService: LogginService) {}

  personaAgregada(persona: Persona) {
    this.loggingService.enviarMensajeAConsola(
      'Agregamos persona: ' + persona.nombre + ' ' + persona.apellido
    );
    this.personas.push(persona);
  }
  encontrarPersona(index: number) {
    return this.personas[index];
  }

  modificarPersona(index: number, personaModificar: Persona) {
    let personaGuardada = this.personas[index];
    personaGuardada.nombre = personaModificar.nombre;
    personaGuardada.apellido = personaModificar.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
