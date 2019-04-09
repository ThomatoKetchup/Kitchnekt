import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CuisinePage} from "../cuisine/cuisine";
import {RecettePage} from "../recette/recette";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CuisinePage;
  tab5Root = RecettePage;

  constructor() {

  }
}
