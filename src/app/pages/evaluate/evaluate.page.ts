import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.page.html',
  styleUrls: ['./evaluate.page.scss'],
})
export class EvaluatePage implements OnInit {
  PrimerBloque: string;
  SegundoBloque: string;
  TercerBloque: string;
  CuartoBloque: string;
  QuintoBloque: string;
  final: string;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  Nota = 0;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

 actualizar() {
    if (this.PrimerBloque === 'minoristas'){
      console.log('es minorista');
      this.count1 =  5;
    }
    if (this.SegundoBloque === 'gobierno'){
      console.log('Gobierno');
      this.count2 =  5;
    }
    if (this.TercerBloque === 'sensor'){
      console.log('Sensor');
      this.count3 =  5;
    }
    if (this.CuartoBloque === 'dispositivos'){
      console.log('Disposivos');
      this.count4 = 5;
    }
    if (this.QuintoBloque === 'verdad'){
      console.log('Verdadero');
      this.count5 = 5;
    }
  }

  async onMostrar() {
    this.Nota =  this.count1 + this.count2 + this.count3 + this.count4 + this.count5;
    if (this.Nota >= 20) {
      this.final = 'Excelente has adquirido buenas habilidades';
    } else {
      this.final = 'Aún no has adquirido buenas habilidades';
    }
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Su puntaje es ' + this.Nota,
      subHeader: 'Pregunta totales: 5 ',
      message: `<ion-item>
      <ion-avatar slot="start">
        <img src="../../assets/img/Ulibre.png"/>
      </ion-avatar>
      <strong>` + this.final + ` </strong>
    </ion-item>`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
