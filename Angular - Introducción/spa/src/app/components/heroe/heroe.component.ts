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
  casaProductora:string;
  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute) {
    
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      if(this.heroe.casa == 'DC')
        this.casaProductora = "assets/img/dc.png";
      else
        this.casaProductora = "assets/img/marvel.png";
    }); //Regresa una observador (estilo promesa)

    
  }


}
