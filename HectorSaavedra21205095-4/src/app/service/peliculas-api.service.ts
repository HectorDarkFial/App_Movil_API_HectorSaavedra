import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface peliculasApi {
  id: string
  movie_id: string
  title: string
  overview: string
  release_date: string
  poster_path: string
  popularity: string
  price: string
  category: string
  duration: string
}


@Injectable({
  providedIn: 'root'
})
export class PeliculasApiService {

  private apiUrl = 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100';

  constructor(
    private http: HttpClient
  ) { }
  
  ApiConectMetodo(): Observable <peliculasApi[]>{
    return this.http.get<peliculasApi[]>(this.apiUrl) 
  }
}
