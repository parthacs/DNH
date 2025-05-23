import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksPage } from './tasks.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TasksPageRoutingModule } from './tasks-routing.module';

const routes: Routes = [
  {
    path: '',
    component: TasksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TasksPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksPageModule {} 