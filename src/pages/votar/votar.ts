import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the VotarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-votar',
  templateUrl: 'votar.html',
})
export class VotarPage {

  candidatos:any;
  votos:any=[];
  dpi:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider,public alertCtrl: AlertController) {
    this.getCandidatos().then((data)=>{
      this.candidatos=data;
    });
  }

  showAlert(mensaje,estado) {
    const alert = this.alertCtrl.create({
      title: estado,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotarPage');
  }

  getCandidatos():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.restProvider.getCandidatos()
    .then(data => {
      resolve(data);
    });
    } 
    );
  }

  seleccionarCandidato(id: any, $event){
    var indice=this.votos.indexOf(id);
    if(indice>=0){
      this.votos.splice(indice,1);
    }else{
      this.votos.push(id);
    }
  }

  emitirVoto(){
    var mesa;
    this.restProvider.getMesa2(this.dpi,"").then((data)=>{ 
      mesa=data[0];
      if(mesa){
        var tipoVoto=0;
        var candidato=-1;
        if(this.votos.length==0){
          tipoVoto=2;
        }else if(this.votos.length>1){
          tipoVoto=1;
        }else if(this.votos.length==1){
          tipoVoto=3;
          candidato=this.votos[0];
        }
        var voto={TipoVotoID:tipoVoto,CandidatoID:candidato,MesaID:mesa.dpi,dpi:this.dpi};
        console.log(JSON.stringify(voto));
        this.restProvider.emitirVoto(JSON.stringify(voto)).then((data)=>{
          console.log(data);
          if(data[0].Resultado==1){
            this.showAlert("Voto registrado correctamente!","Voto emitido");
          }else if(data[0].Resultado==0){
            this.showAlert("Voto en blanco/nulo registrado correctamente!","Voto emitido");
          }
          else{
            this.showAlert("La persona con dpi: "+this.dpi+" ya realizo su respectivo voto","Error");
          }
        });
      }else{
        this.showAlert("No existe la persona con el dpi: "+this.dpi,"Error");
      }
      
    });

  }

}
