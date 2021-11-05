import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { respMDB, PelisDetail, ActorPelis } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 0;

  constructor( private http: HttpClient ) {}

  private ejecutarQuery<T> (query:string){
    query = URL + query;
    query += `&api_key=${ apiKey }&language=es`
    return this.http.get<T>( query );
  }
  getPopular(){
    this.popularPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.ejecutarQuery<respMDB>( query );
  }

  getFeature(){
    const hoy = new Date();
    const ULday = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString; 

    if( mes < 10){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const ini = `${ hoy.getFullYear() }-${ mesString }-01`;
    const end = `${ hoy.getFullYear() }-${ mesString }-${ ULday }`

    return this.ejecutarQuery<respMDB>(`/discover/movie?primary_release_date.gte=${ ini }&primary_release_date.lte=${ end }`)
  }

  getPelisDetail ( id: string ){
    return this.ejecutarQuery<PelisDetail>(`/movie/${id}?a=1`);
  }

  getActorPelis( id: string ){
    return this.ejecutarQuery<ActorPelis>(`/movie/${id}/credits?a=1`);
  }
}