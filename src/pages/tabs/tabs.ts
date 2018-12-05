import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {KitchenPage} from "../kitchen/kitchen";
import {RecipesPage} from "../recipes/recipes";
import {StocksPage} from "../stocks/stocks";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  RecipesRoot = RecipesPage;
  stocksRoot = StocksPage;
  kitchenRoot = KitchenPage;

  constructor() {

  }
}
