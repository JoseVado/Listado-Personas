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
}
