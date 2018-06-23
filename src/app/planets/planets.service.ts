import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Planet } from './planet';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {


  planets: Planet[] = [];
  //* API URL
  api_url: string = 'http://ghosteacher.com/apis/planets.php?apikey=pineapple';

  api_url_details: string = 'http://ghosteacher.com/apis/planets.php?apikey=pineapple&p_id=';

  getPlanet(): Observable<Planet[]> {
    return this.http.get< Planet[] >(this.api_url);
  } 

  getPlanetDetails(id: number): Observable<Planet> {
    return this.http.get< Planet >(this.api_url_details + id);
  }



  constructor(
    private http: HttpClient
  ) { }
}
