import { Component, Input, OnInit } from '@angular/core';
import { Pelis } from 'src/app/interfaces/interfaces';

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
  
  constructor() { }

  ngOnInit() {}

}
