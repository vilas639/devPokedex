import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  offset = 0 ;

  pokemon = [];

  // @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  

  constructor(private pokeservice: PokemonService) {}


  ngOnInit(): void {
    this.loadpokelist();
  }


  loadpokelist(loadMore = false, event?) {

    if (loadMore) {
      this.offset += 25;
    }
    this.pokeservice.getPokemon(this.offset).subscribe(res => {

      console.log('result: ', res);

      this.pokemon = [...this.pokemon, ...res];

      if (event) {
        event.target.complete();
      }
 
      // Optional
      // if (this.offset == 125) {
      //   this.infinite.disabled = true;
      // }
    });
  }


  onSearchChange(e) {
    let value = e.detail.value;

    // tslint:disable-next-line: triple-equals
    if (value == '') {
      this.offset = 0;
      this.loadpokelist();
      return;
    }
    this.pokeservice.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }

}
