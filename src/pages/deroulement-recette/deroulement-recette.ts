import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeroulementRecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deroulement-recette',
  templateUrl: 'deroulement-recette.html',
})
export class DeroulementRecettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeroulementRecettePage');
  }

  allumerFour() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText));
      }
    };
    xmlhttp.open('PUT', 'http://localhost:3000/api/elementConnecte/1');
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({etat : 1}));
  }

}
