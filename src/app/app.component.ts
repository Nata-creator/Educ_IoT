import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'GNatalia & GDiego',
      subHeader: 'Estudiantes',
      message: `<ion-item>
      <ion-avatar slot="start">
        <img src="../../assets/img/Ulibre.png"/>
      </ion-avatar>
      <strong>Ingeniería de Sistemas</strong>
    </ion-item>`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
