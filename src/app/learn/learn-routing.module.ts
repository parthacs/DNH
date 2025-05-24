import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnPage } from './learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage
  },
  {
    path: 'details',
    loadChildren: () => import('./learn-details.module').then(m => m.LearnDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPageRoutingModule {} 