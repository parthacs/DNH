import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnDetailsPage } from './learn-details.page';

const routes: Routes = [
  {
    path: '',
    component: LearnDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnDetailsPageRoutingModule {} 