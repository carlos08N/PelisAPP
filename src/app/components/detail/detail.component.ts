import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PelisDetail, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id; 

  Peli: PelisDetail = {};
  actores: Cast[] = [];
  oculto = 150;
  slideOptsActor= {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween: -5,
  }
  
  constructor(private movieService: MoviesService, private modaLCtrl: ModalController) { }

  ngOnInit() {
    this.movieService.getPelisDetail(this.id).subscribe( resp => {
      console.log(resp);
      this.Peli = resp;
    });
    this.movieService.getActorPelis(this.id).subscribe( resp => {
      console.log(resp);
      this.actores = resp.cast;
    });
  }

  regresar(){
    this.modaLCtrl.dismiss();
  }
}
