import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  entryComponents: [
    DetailComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlideshowParesComponent,
    DetailComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideShowPosterComponent,
    SlideshowParesComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
