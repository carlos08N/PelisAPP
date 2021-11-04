import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPipe } from './img.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [
    ImgPipe,
    ParesPipe
  ],
  exports: [
    ImgPipe,
    ParesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
