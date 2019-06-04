import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsComponent } from './animals/animals.component';
import { AnimalsCreatorComponent } from './animals-creator/animals-creator.component';

const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path:'animals', component: AnimalsComponent },
  { path:'animals/new', component: AnimalsCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
