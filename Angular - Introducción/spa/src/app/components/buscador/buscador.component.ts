import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroesArr: Heroe[];
  termino: string;
  constructor(private heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroesArr = this.heroesService.buscarHeroes(this.termino);

    });
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
