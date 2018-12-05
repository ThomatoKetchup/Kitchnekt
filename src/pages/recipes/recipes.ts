import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Recipe} from "../../model/recipe";


/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  tabRecipe:Array<Recipe> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipesSuggestions();
    console.log(this.tabRecipe);
  }

   recipesSuggestions() { //Provisoire en attendant d'avoir l'API
    let r1 = new Recipe("Poulet à la crème et champignons","https://image.afcdn.com/recipe/20150215/27577_w420h344c1cx247cy165.jpg");
    let r2 = new Recipe("Pomme au à la pâte de noix","https://image.afcdn.com/recipe/20120504/59379_w420h344c1cx750cy1125.jpg");
    let r3 = new Recipe("Tarte à la rhubarbe","https://image.afcdn.com/recipe/20180827/81958_w420h344c1cx2356cy1728cxt0cyt0cxb4712cyb3456.jpg");
    let r4 = new Recipe("Nems de crêpe saumon fumé, concombre, oignon rouge","https://image.afcdn.com/recipe/20180927/82361_w420h344c1cx2144cy1424cxt0cyt0cxb4288cyb2848.jpg");

    this.tabRecipe.push(r1);
    this.tabRecipe.push(r2);
    this.tabRecipe.push(r3);
    this.tabRecipe.push(r4);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

}
