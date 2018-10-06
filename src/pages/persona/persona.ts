import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {

  formularioPersona: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public alertCtrl: AlertController,public restProvider: RestProvider) {
    this.formularioPersona = formBuilder.group({
      //usuario: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
      dpi:['',Validators.compose([Validators.maxLength(15), Validators.pattern('[0-9]+'), Validators.required])],
      padron: ['',Validators.compose([Validators.maxLength(15),Validators.pattern('[0-9]+'),Validators.required])],
      fechaNacimiento: [''],
      nombre:['',Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z]+'), Validators.required])],
      apellido: ['',Validators.compose([Validators.maxLength(15),Validators.pattern('[a-zA-Z]+'),Validators.required])],
      genero: ['']
    });

    this.formularioPersona.controls.genero.setValue('1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

  crearPersona(){
    var persona={no_empadronamiento:this.formularioPersona.controls.padron.value,dpi:this.formularioPersona.controls.dpi.value,fecha_nacimiento:this.formularioPersona.controls.fechaNacimiento.value,nombre:this.formularioPersona.controls.nombre.value,apellido:this.formularioPersona.controls.apellido.value,genero:this.formularioPersona.controls.genero.value};
    this.restProvider.setPersona(JSON.stringify(persona)).then((data)=>{
      
    });
    console.log("JSON.stringify(persona)");
    //this.navCtrl.setRoot(TabsPage);
  }

}

