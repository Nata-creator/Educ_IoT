import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gafas',
  templateUrl: './gafas.component.html',
  styleUrls: ['./gafas.component.scss'],
})
export class GafasComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCerrar(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
