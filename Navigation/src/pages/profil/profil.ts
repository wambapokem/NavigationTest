import { showMenuButton } from '../../providers/menu';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  showMenuNHideBackButton: boolean;

  constructor(public navCtrl: NavController, public showMenuButtonProvider: showMenuButton) {
    this.showMenuNHideBackButton = this.showMenuButtonProvider.showMenuButton;
    console.log(this.showMenuNHideBackButton);

  }

}
