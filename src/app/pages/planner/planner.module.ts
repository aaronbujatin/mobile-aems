import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlannerPageRoutingModule } from './planner-routing.module';

import { PlannerPage } from './planner.page';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlannerPageRoutingModule,
    
  ],
  declarations: [PlannerPage, TimeFormatPipe]
})
export class PlannerPageModule {}
