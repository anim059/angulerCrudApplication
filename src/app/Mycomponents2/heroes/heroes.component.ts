import { Component, OnInit } from '@angular/core';
import { hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros : hero[] = [];
  selecthero?:hero;
  constructor(private HeroService:HeroService) { }

  getHeros():void{
     this.HeroService.getHero1().subscribe( heros => this.heros = heros);
  }

  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero:hero):void{
    this.selecthero=hero;
  }

  add(name:string):void{
    name = name.trim();
    if(!name){ return; }
    this.HeroService.addhero({name} as hero).subscribe(hero=>this.heros.push(hero));
  }

  delete(hero:hero):void{
    this.heros = this.heros.filter(h=>h !== hero);
    this.HeroService.deletehero(hero.id).subscribe();
  }

}
