import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MessagesService} from './messages.service';
import {PagedData} from '../models/paged-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';
  private id: number;

  constructor(private http: HttpClient, private messagesService: MessagesService) {
  }

  getPokemons(offset: number, limit: number): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl + `/pokemons?offset=${offset}&limit=${limit}`)
      .pipe(
        tap(_ => this.log(`fetched pokemons`)),
        catchError(this.handleError<PagedData<Pokemon>>('getPokemons', []))
      );
  }

  getPokemon(id: number): Observable<Pokemon> {
    this.log(`fetched pokemon id=${id}`);
    return this.http.get<Pokemon>(this.pokemonUrl + `/pokemons/${id}`);
  }

  setPokemonId(id: number) {
    this.id = id;
  }

  getPokemonId() {
    return this.id;
  }

  searchPokemons(term: string): Observable<PagedData<Pokemon>> {
    // if (!term.trim()) {
    //   // if not search term, return empty Pokemon array.
    //   return of([]);
    // }
    const params = new HttpParams()
      .set('name', term);
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl + `/pokemons?search=${term}`)
      .pipe(
      tap(_ => this.log(`found Pokemons matching "${term}"`)),
      catchError(this.handleError<PagedData<Pokemon>>('searchPokemons', []))
    );
  }

  private log(message: string) {
    this.messagesService.add(`PokemonService : ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: any[]) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as unknown as T);
    };
  }
}
