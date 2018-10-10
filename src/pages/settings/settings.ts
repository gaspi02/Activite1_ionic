import {Component} from "@angular/core";
import {AlertController, MenuController} from "ionic-angular";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
  constructor(private alertCtrl: AlertController, private menuCtrl: MenuController) {
  }

  onToggleLend() {
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action louera ou rendra toutes les affaires !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    alert.present();
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
}
