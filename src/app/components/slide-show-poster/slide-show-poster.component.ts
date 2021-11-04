import { Component, Input, OnInit } from '@angular/core';
import { Pelis } from 'src/app/interfaces/interfaces';

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
  constructor() { }

  ngOnInit() {}

}
