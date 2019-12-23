import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonListComponent} from './pokemons/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pokemons/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent},
  { path: 'detail/:id', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
