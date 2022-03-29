import { Component, Input, OnInit } from '@angular/core';
import { hero } from '../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-here-details',
  templateUrl: './here-details.component.html',
  styleUrls: ['./here-details.component.css']
})
export class HereDetailsComponent implements OnInit {

  @Input() hero?: hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(()=> this.goBack());
    }
  }

}
