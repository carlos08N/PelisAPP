import { Component, Input, OnInit } from '@angular/core';
import { Pelis } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() movies: Pelis[] = [];

  slideOpts= {
    slidesPerView: 2.6,
    freeMode: true,
    spaceBetween: -10,
  }
  constructor() { }

  ngOnInit() {}

}
