import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Alta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alta',
  templateUrl: 'alta.html'
})
export class AltaPage { 
  //persona: {id: string ;nombre: string, apellido: string, dni: string};
  persona= {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaPage');
  }

  agregar(){
   /* this.http
             .post(url, JSON.stringify(hero), {headers: headers})
             .map(res => res.json());*/
    console.log(this.persona);
  }

}
