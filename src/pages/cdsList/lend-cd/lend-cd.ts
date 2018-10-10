import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {Cd} from "../../../models/Cd";
import {CdsService} from "../../../services/cds.service";


@Component({
  selector: 'page-single-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public cdsService: CdsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdsService.CdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCd() {
    this.cd.isLend = !this.cd.isLend;
  }

}
