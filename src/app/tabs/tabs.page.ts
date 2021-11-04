import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelis, respMDB } from '../interfaces/interfaces'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage  implements OnInit{
  t1="";
  t2="";
  t3="";
  constructor() {}

  ngOnInit(){
  }

  CC(id: number): void{
    if(id == 1 ){
      this.t1="danger";
      this.t2="";
      this.t3="";
    }else if(id == 2){
      this.t1="";
      this.t2="dark";
      this.t3="";
    }else if(id == 3){
      this.t1="";
      this.t2="";
      this.t3="success";
    }
    return
  }
}
