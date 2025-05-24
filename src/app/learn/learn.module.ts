import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LearnPage } from './learn.page';
import { LearnPageRoutingModule } from './learn-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LearnPageRoutingModule,
    SharedModule
  ],
  declarations: [LearnPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LearnPageModule {} 