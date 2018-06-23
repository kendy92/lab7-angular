import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlanetsService } from '../planets/planets.service';
import { Planet } from '../planets/planet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  num: number;
  planet: Planet;

  getNum():void {
    this.num = +this.route.snapshot.paramMap.get('id');
  }
  

  getPlanetDetails() {
    this.planetService.getPlanetDetails(this.num).subscribe(data => this.planet = data);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private planetService: PlanetsService
  ) { }

  ngOnInit() {
    this.getNum();
    this.getPlanetDetails();
  }

}
