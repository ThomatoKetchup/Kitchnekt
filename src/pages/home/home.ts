import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecettePage} from "../recette/recette";
import {CuisinePage} from "../cuisine/cuisine";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
   nom: string;

  constructor(public navCtrl: NavController) {
    this.nom = "Thomas"

  }

pushRecette(){
  this.navCtrl.push(RecettePage)
}

pushCuisine(){
    this.navCtrl.push(CuisinePage)
  }

}
