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

  getPokemon() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(result => this.pokemon = result);
  }

  ngOnInit() {
    this.getPokemon();
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.pokemonService.updatePokemon(this.pokemon).subscribe(result => this.pokemon = result);
    this.goBack();
  }

  playAudio(input: any) {
    input.play();
  }

}
