import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecettePage} from "../recette/recette";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  pushRecette(){
    this.navCtrl.push(RecettePage)
  }

}
