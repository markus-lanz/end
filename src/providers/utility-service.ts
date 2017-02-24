import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the UtilityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilityService {

  public xmlItems :any;
  public _eBooks :any;
  constructor(public http: Http, public toastCtrl:ToastController) {
    console.log('Hello UtilityService Provider');

  }

  getEbooks():any{
    return this._eBooks;
  }

  setEbooks(arr:any){
    this._eBooks = arr;
  }
  presentToast(type,message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position:'bottom',
      dismissOnPageChange:true,
      cssClass: (type === 'success')? "toast-success":"toast-error"
    });
    toast.present().then(() => toast.dismiss()).catch(() => toast.dismiss());
  }




  loadXml(){
    this.http.get('assets/app-data-files/xml-data.xml')
      .map(res => res.text())
      .subscribe((data)=>
      {
        this.parseXML(data)
          .then((data)=>
          {
            this.xmlItems = data;
            this.setEbooks(this.xmlItems);
            console.log(this.xmlItems);
            this.presentToast('success','Your Data has been successfully processed');
          })
          .catch(()=>{
            this.presentToast('error','Your Data cannot be processed');

          });
      });
  }

  parseXML(data){
    return new Promise(resolve =>
    {
      let k,
        arr    = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });

      parser.parseString(data, function (err, result)
      {
        const obj = result.comics;
        for(k in obj.publication)
        {
          const item = obj.publication[k];
          arr.push({
            id 		    : item.id[0],
            title 	    : item.title[0],
            publisher : item.publisher[0],
            genre 	    : item.genre[0]
          });
        }

        resolve(arr);
      });
    });
  }

}
