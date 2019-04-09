import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecettePage} from "../recette/recette";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
   nom: string;

  constructor(public navCtrl: NavController) {
    this.nom = "Thomas"

  }

pushPage(){
  this.navCtrl.push(RecettePage)
}

}
