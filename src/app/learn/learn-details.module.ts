import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LearnDetailsPage } from './learn-details.page';
import { LearnDetailsPageRoutingModule } from './learn-details-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LearnDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [LearnDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LearnDetailsPageModule {} 