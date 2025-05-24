import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskPageModule)
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./edit-task/edit-task.module').then(m => m.EditTaskPageModule)
  },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then(m => m.LearnPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
