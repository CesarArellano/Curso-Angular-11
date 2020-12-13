import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; 
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  heroe:any = {};
  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute) {
    
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
      
    }); //Regresa una observador (estilo promesa)

    
  }


}
