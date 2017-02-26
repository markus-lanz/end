import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
/*
  Generated class for the ProductModals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-modals',
  templateUrl: 'product-modals.html'
})
export class ProductModalsPage {


  Data = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Data = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalsPage');
  }
  openProductPdf(file){
    const name = 'ng-book.pdf';
    //InAppBrowser.open('assets/ng-book.pdf','_system','location=yes');
    new InAppBrowser(`assets/${file}`,'_blank','location=no');

  }
}
