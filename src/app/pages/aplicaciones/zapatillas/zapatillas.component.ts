import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss'],
})
export class ZapatillasComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCerrar(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
