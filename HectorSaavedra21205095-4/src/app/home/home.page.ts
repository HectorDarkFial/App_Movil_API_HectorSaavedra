import { Component, OnInit } from '@angular/core';
import { PeliculasApiService } from '../service/peliculas-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
  items:any

  constructor(
    private PeliculasService: PeliculasApiService
  ) {}
  
  ngOnInit(): void {
    const peliculas= localStorage.getItem('peliculas')
    if(peliculas){
      console.log('Peliculas del LocalStorage')
      this.items = JSON.parse(peliculas)
    }else{
      this.PeliculasService.ApiConectMetodo().subscribe((peliculas)=>{
        this.items = peliculas;
        
        console.log('Peliculas de la APi');
        localStorage.setItem('peliculas', JSON.stringify(this.items))
      })
    }

  }
}
