import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { hero } from 'src/app/hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$! : Observable<hero[]>;
  private searchTerm = new Subject<string>();
  constructor(private heroservice : HeroService) { }

  search(term:string):void{
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroservice.searchHeroes(term)),
      
    );
  }



  

}
