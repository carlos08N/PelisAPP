import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelis } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {

  @Input() movies: Pelis[] = [];
  slideOpts= {
    slidesPerView: 2.6,
    freeMode: true,
  }
  constructor( private modaLCtrl: ModalController) { }

  ngOnInit() {}

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