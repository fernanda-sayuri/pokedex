import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');

  }
}
