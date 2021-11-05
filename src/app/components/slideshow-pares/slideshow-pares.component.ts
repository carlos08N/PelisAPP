import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelis } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() movies: Pelis[] = [];
  @Output() cargarMas = new EventEmitter();
  slideOpts= {
    slidesPerView: 2.6,
    freeMode: true,
    spaceBetween: -10,
  }
  constructor( private modaLCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }

  async verDetail(id: string){
    const modal = await this.modaLCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}