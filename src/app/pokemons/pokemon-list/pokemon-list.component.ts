import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  private coefScroll = 1;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons(0, 10).subscribe(result => this.pokemons = result.data);
  }

  onScroll() {
    this.pokemonService.getPokemons(this.coefScroll * 10,  10)
      .subscribe(result => this.pokemons.push.apply(this.pokemons, result.data));
    this.coefScroll++;
  }

}
