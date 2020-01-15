import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {PokemonService} from '../services/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location: Location) { }

  getPokemon(id: number) {
    this.pokemonService.getPokemon(id).subscribe(result => this.pokemon = result);
  }

  ngOnInit() {
    if (this.pokemonService.getPokemonId()) {
      this.getPokemon(this.pokemonService.getPokemonId());
    }
  }

  goBack() {
    this.location.back();
  }

  playAudio(input: any) {
    input.play();
  }

}
