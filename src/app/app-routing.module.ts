import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Mycomponents2/dashboard/dashboard.component';
import { HeroesComponent } from './Mycomponents2/heroes/heroes.component';
import { HereDetailsComponent } from './Mycomponents2/here-details/here-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes', component:HeroesComponent},
  {path:'dashbroad', component:DashboardComponent },
  {path:'details/:id', component : HereDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
