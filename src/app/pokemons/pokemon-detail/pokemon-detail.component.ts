import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetPokemonsService} from "../get-pokemons.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private getPokemonsService: GetPokemonsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPokemonsService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }

}
