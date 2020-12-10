import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent {
    mostrar:boolean = true;
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }
    personajes: string[] = ['Spiderman', 'Venom', 'Doctor Octopus', 'Duende Verde']
}