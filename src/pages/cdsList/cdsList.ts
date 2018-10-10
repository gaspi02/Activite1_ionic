import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {CdsService} from "../../services/cds.service";
import {Cd} from "../../models/Cd";
import {LendCdPage} from "./lend-cd/lend-cd";

@Component({
  selector: 'page-cds',
  templateUrl: 'cdsList.html',
})
export class CdListPage {

  cdsList: Cd[];

  constructor(private modalCtrl: ModalController,
              private cdService: CdsService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.cdsList = this.cdService.CdsList.slice();
  }


  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
}
