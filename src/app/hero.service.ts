import { Injectable } from '@angular/core';
import { hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  

  private heroesUrl = 'api/heroes';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getHero1() : Observable<hero[]>{
  //   const heroes = of(HEROES);
  //   this.messageService.add("HeroService: fetched heroes")
  //   return heroes;
  // }
  // getHero(id:number) : Observable<hero>{
  //   const hero = HEROES.find(h=> h.id === id)!;
  //   this.messageService.add(`HeroService: fetched hero id=${id}`)
  //   return of(hero);
  // }

  getHero1(): Observable<hero[]> {
    return this.http.get<hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<hero>(`getHero id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateHero(hero:hero): Observable<any>{
    return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addhero(hero: hero):Observable<hero>{
    return this.http.post<hero>(this.heroesUrl,hero,this.httpOptions).pipe(
      tap((newHero: hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<hero>('addHero'))
    );
  }

  deletehero(id:number) :Observable<hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<hero>(url,this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<hero[]> {
     if(!term.trim()){ return of([]) }
     return this.http.get<hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        tap(x => x.length ?
          this.log(`found heroes matching "${term}"`) :
          this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<hero[]>('searchHeroes', []))
     )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  
}
