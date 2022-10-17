import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
// import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string ='https://restcountries.com/v2';


  get httpParams(){
    return  new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population')
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country []>(url, {params: this.httpParams})
    // .pipe(
    //   catchError(err=> of([]))
    // );
  }

  //https://restcountries.com/v2/capital/lima
  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country []>(url, {params: this.httpParams})
  }


    //https://restcountries.com/v2/alpha/id
    getPaisPorApha(id:string):Observable<Country>{
      const url = `${this.apiUrl}/alpha/${id}`
      return this.http.get<Country >(url)
    }
  


  //https://restcountries.com/v2/regionalbloc/{regionalbloc}
  buscarRegion(region:string):Observable<Country []>{

 

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(
      tap(console.log)
    )
    
  }
    



}
