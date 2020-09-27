import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.scss'],
})
export class SensoresComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCerrar(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
