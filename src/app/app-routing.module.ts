import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: "", component:  HomeComponent},
  { path: "detalhes", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
