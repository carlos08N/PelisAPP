import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelis } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Pelis[] = [];

  slideOpts= {
    slidesPerView: 1.15,
    freeMode: true,
  }
  
  constructor( private modaLCtrL: ModalController ) { }

  ngOnInit() {}

   async verDetail(id: string){
    const modal = await this.modaLCtrL.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
