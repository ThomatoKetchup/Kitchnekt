import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodServiceProvider {
  url = 'https://spoonacular.com/recipeImages';
  format = '-556x370.jpg';
  recipeId = '579247';


  constructor(public http: HttpClient) {
    // getDetails() {
    //   return this.http.get(`${this.url}/${this.recipeId}${this.format}`);
    // }
  }

}
