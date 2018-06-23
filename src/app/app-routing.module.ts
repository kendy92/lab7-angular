import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//* import component
import {PlanetsComponent} from './planets/planets.component';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';

//* set up routes arr
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
