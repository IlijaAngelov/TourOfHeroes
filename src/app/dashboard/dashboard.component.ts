import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  // defines hero array property

  constructor(private heroService: HeroService) { }
  // constructor expects Angular to inject the heroService into private heroService property

  ngOnInit() {
    this.getHeroes();
    // the lifecycle hook calls getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
    // getHeroes reduces number of heroes displayed to 4(2nd, 3rd, 4th, 5th)
}


