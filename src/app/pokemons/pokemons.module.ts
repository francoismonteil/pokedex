import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule, MatListModule} from '@angular/material';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
