import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the MesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesa',
  templateUrl: 'mesa.html',
})
export class MesaPage {

  mesa:any;
  dpi:any;
  padron:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public restProvider: RestProvider) {
    
  }

  presentLoading() {

    const loader = this.loadingCtrl.create({
      content: "Buscando..."
    });
    loader.present().then((e)=>{
      //loader.dismiss();
      this.showMesa(loader);
    });
  
  }

  showMesa(loader){
    this.getMesa(this.dpi,this.padron).then((data)=>{
      loader.dismiss();
      if(data){
        const alert = this.alertCtrl.create({
          title: 'Mesa de votación',
          subTitle:'Departamento:'+data[0].NombreDepartamento+'<br>Direccion: '+data[0].DireccionCentroVotacion+'<br>Mesa: '+data[0].Descripcion,
          //subTitle: 'Departamento: Guatemala<br>Direccion: Zona 1, Instituto central para varones<br>Mesa: 1',
          buttons: ['OK']
        });
        alert.present();
      }else{
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle:'No hay conexión',
          buttons: ['OK']
        });
        alert.present();
      }
      
    }
  
  );
    
  
  }


  getMesa(dpi,padron):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.restProvider.getMesa2(dpi,padron)
    .then(data => {
      this.mesa = data;
      resolve(this.mesa);
    });
    }
    
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaPage');
  }

}
