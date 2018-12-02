import { Component, OnInit } from '@angular/core';
import {GetPokemonsService} from "../get-pokemons.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[];
  offset: number = 0;
  limit: number = 10;

  constructor(
    private getPokemonsService: GetPokemonsService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.getPokemonsService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons.data);
  }

  onScroll(): void {
    console.log("scroll");
    this.offset += 10;
    this.getPokemonsService.getPokemonsWithQueryParams(this.offset, this.limit)
      .subscribe(pokemons => pokemons.data.forEach(item => {
        this.pokemons.push(item);
    }));
  }
}
