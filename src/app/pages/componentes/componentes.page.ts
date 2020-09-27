import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {
  ejemplos = [
    {
      img: './../../../assets/componentes/casco_realidad_virtual.jpg',
      titulo: 'Casco de realidad virtual'
    }, {
      img: './../../../assets/componentes/pasos.jpg',
      titulo: 'Pasos dados'
    }, {
      img: './../../../assets/componentes/presion.jpg',
      titulo: 'Presión arterial'
    }, {
      img: './../../../assets/componentes/textiles.jpg',
      titulo: 'Textiles Inteligentes'
    }, {
      img: './../../../assets/componentes/manillla.jpg',
      titulo: 'Tiempo de ejercicio gastado'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  }
