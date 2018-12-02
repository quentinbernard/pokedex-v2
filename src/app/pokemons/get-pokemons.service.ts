import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class GetPokemonsService {

  constructor(
    private http: HttpClient) { }

  getPokemons(): Observable<any>{
    return this.http.get<any>(environment.pokemonUrl + 'pokemons');
  }

  getPokemon(id: number): Observable<any>{
    return this.http.get<any>(environment.pokemonUrl + 'pokemons/' + id );
  }

  getPokemonsWithQueryParams(offset: number, limit: number): Observable<any>{
    return this.http.get<any>(environment.pokemonUrl + 'pokemons?offset=' + offset + '&limit=' + limit);
  }
}
