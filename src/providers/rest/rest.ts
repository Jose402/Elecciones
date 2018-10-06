import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  usuario;
  //apiUrl = 'https://jsonplaceholder.typicode.com';
  apiUrlElecciones="http://localhost:8080/elecciones/recursos/elecciones";
  apiUrl="https://satomcat8.azurewebsites.net/Servicios/Recursos-SA";
  //apiUrl="/recursos";
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  /*
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  */
 
  getMesa(dpi,padron) {
    return new Promise(resolve => {
      this.http.get(this.apiUrlElecciones+'/getMesa?dpi='+dpi+'&padron='+padron).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(null);
        console.log(err);
      });
    });
  }

  getMesa2(dpi,padron) {
    var cadenaJson="{"
                    +"\"dpi\":\""+dpi+"\""
                    +"}";
                    console.log(cadenaJson);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/ConsultarMesaPorDPI',cadenaJson,{headers: {'Content-Type': 'application/json'}})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCandidatos(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/ObtenerCandidatos').subscribe(data => {
        resolve(data);
      }, err => {
        resolve(null);
        console.log(err);
      });
    });
  }

  getResultados(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/ConteoVotos').subscribe(data => {
        resolve(data);
      }, err => {
        resolve(null);
        console.log(err);
      });
    });
  }

  emitirVoto(cadenaJson) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/EmitirVoto',cadenaJson,{headers: {'Content-Type': 'application/json'}})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  setPersona(usuario){
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/CrearPersona',usuario,{headers: {'Content-Type': 'application/json'}})
        .subscribe(res => {
          console.log("----CrearPersona----");
          console.log(res.Resultado);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  setUsuario(usuario){
  }

  getUsuario(){
    return this.usuario;
  }

}
