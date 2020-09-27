import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacionesPageRoutingModule } from './aplicaciones-routing.module';

import { AplicacionesPage } from './aplicaciones.page';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { SensoresComponent } from './sensores/sensores.component';
import { GafasComponent } from './gafas/gafas.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacionesPageRoutingModule
  ],
  declarations: [
                AplicacionesPage,
                ZapatillasComponent,
                SensoresComponent,
                GafasComponent,
                BotonComponent],
  entryComponents: [
                    ZapatillasComponent,
                    SensoresComponent,
                    SensoresComponent,
                    GafasComponent,
                    BotonComponent]
})
export class AplicacionesPageModule {}
