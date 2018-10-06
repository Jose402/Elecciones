import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  users: any;
  mesa:any;
  constructor(public navCtrl: NavController,public restProvider: RestProvider) {
    //this.getUsers();
    //this.getMesa(2,3);
  }

  /*
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  getMesa(dpi,padron){
    this.restProvider.getMesa(dpi,padron)
    .then(data => {
      this.mesa = data;
      console.log(this.mesa.mesa);
    });
  }
*/
}

