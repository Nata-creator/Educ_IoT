import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueEsPageRoutingModule } from './que-es-routing.module';

import { QueEsPage } from './que-es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueEsPageRoutingModule
  ],
  declarations: [QueEsPage]
})
export class QueEsPageModule {}
