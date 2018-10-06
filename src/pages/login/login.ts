import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formularioLogin: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public restProvider: RestProvider) {
    this.formularioLogin = formBuilder.group({
      //usuario: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      dpi:['',Validators.compose([Validators.maxLength(15), Validators.pattern('[0-9]*'), Validators.required])],
      padron: ['',Validators.compose([Validators.maxLength(15),Validators.pattern('[0-9]*'),Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.restProvider.setUsuario('Jose');
    var usuario={no_empadronamiento:this.formularioLogin.controls.padron.value,dpi:this.formularioLogin.controls.dpi.value};
    console.log(JSON.stringify(usuario));
    this.navCtrl.setRoot(TabsPage);
  }

}
