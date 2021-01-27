import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from '../../service/pokedex-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemons:any;

  constructor(private pokemonService: PokedexServiceService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => this.pokemons = data.pokemon);
  }



}
