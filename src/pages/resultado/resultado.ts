import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  resultados:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    restProvider.getResultados().then((data)=>{
      this.resultados=data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
