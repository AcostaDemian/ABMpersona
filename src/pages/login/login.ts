import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListadoPage } from '../listado/listado';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logear() {
    this.navCtrl.push(ListadoPage);
  }

}
