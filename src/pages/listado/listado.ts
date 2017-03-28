import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Listado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  personas: Array<{id: string ;nombre: string, apellido: string, dni: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    //this.personas = [{"id":1,"nombre":"Demian","apellido":"Acosta","dni":1414},{"id":2,"nombre":"Joa","apellido":"Quin","dni":5690}];
    this.http.get('http://acostademianariel.esy.es/PPS2017/index.php/personas').map(res => res.json()).subscribe(data => {
      console.log(data);   
      this.personas = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}
