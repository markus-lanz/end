/*
 Generated class for the ProdcutPresentations page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';


// COMPONENT
@Component( {
  selector    : 'page-product-presentations',
  templateUrl : 'product-presentations.html'
})


// EXPORTS
export class ProductPresentationsPage {

  data = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPresentationsPage');
  }

}
