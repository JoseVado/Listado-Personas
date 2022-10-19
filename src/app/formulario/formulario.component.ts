import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent {
  //@Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput: string = "";
  //apellidoInput: string = "";

  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apelldioInput') apellido: ElementRef;

  constructor(
    private logginService: LogginService,
    private personaService: PersonasService
  ) {
    this.personaService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  //nombre:HTMLInputElement, apellido:HTMLInputElement
  agregarPersona() {
    let persona1 = new Persona(
      this.nombre.nativeElement.value,
      this.apellido.nativeElement.value
    );

    //this.logginService.enviarMensajeAConsola("Enviamos persona: " + persona1.nombre + " " + persona1.apellido);

    //this.personaCreada.emit(persona1);
    //this.personas.push(persona1);

    this.personaService.personaAgregada(persona1);
  }
}
