import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeroulementRecettePage } from './deroulement-recette';

@NgModule({
  declarations: [
    DeroulementRecettePage,
  ],
  imports: [
    IonicPageModule.forChild(DeroulementRecettePage),
  ],
})
export class DeroulementRecettePageModule {}
