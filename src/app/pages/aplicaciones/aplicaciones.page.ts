import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { SensoresComponent } from './sensores/sensores.component';
import { GafasComponent } from './gafas/gafas.component';
import { BotonComponent } from './boton/boton.component';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.page.html',
  styleUrls: ['./aplicaciones.page.scss'],
})
export class AplicacionesPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  OpenZapatillas(){
    this.modalCtrl.create({component: ZapatillasComponent}).then(modalEl =>{
      modalEl.present();
    });
  }

  onSensores(){
    this.modalCtrl.create({component: SensoresComponent}).then(modalEl =>{
      modalEl.present();
    });
  }

  onGafas(){
    this.modalCtrl.create({component: GafasComponent}).then(modalEl =>{
      modalEl.present();
    });
  }

  onBoton(){
    this.modalCtrl.create({component: BotonComponent}).then(modalEl =>{
      modalEl.present();
    });
  }
}
