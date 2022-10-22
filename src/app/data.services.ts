import {HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient) { }

    cargarPersonas() {
        return this.httpClient.get(
          'https://listado-personas-7feb6-default-rtdb.firebaseio.com/datos.json'
        );
    }
    
    //Guradar personas
    guardarPersonas(personas: Persona[]) {
        this.httpClient.put(
          'https://listado-personas-7feb6-default-rtdb.firebaseio.com/datos.json', personas
        ).subscribe(
            response => console.log("Resultado de guardar las Personas: " + response),
            error => console.log("Error al guardar Personas: " + error)
        );
    }

    modificarPersona(index: number, persona: Persona) {
        let url: string;
        url =
            'https://listado-personas-7feb6-default-rtdb.firebaseio.com/datos/' + index +'.json';
        this.httpClient.put(url, persona).subscribe(
            response => console.log("Resultado Modificar Persona: " + response)
            ,
            error => console.log("Error modificar Persona: " + error)
        );
            
    }

    eliminarPersona(index: number) {
        let url: string;
        url =
          'https://listado-personas-7feb6-default-rtdb.firebaseio.com/datos/' +
          index +
          '.json';
        this.httpClient.delete(url).subscribe(
          (response) => console.log('Resultado Eliminar Persona: ' + response),
          (error) => console.log('Error eliminar Persona: ' + error)
        );
    }
}