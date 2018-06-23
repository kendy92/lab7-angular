import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Planet } from './planet';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  getPlanet() {
    this.planetService.getPlanet().subscribe(data => this.planets = data);
  }

  constructor(
    private planetService: PlanetsService
  ) { }

  ngOnInit() {
    this.getPlanet();
  }

}
