/*
 Generated class for the Newproducts page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { UtilityService } from '../../../providers/utility-service';
import { InAppBrowser   } from 'ionic-native';


// COMPONENT
@Component( {
  selector    : 'page-newproducts',
  templateUrl : 'newproducts.html'
} )


// EXPORT
export class NewproductsPage {
  productNewList1 = null;
  productNewList2 = null;
  productCategory = null;

  constructor( public navCtrl : NavController, public navParams : NavParams, public ut : UtilityService ) {

    this.productCategory = ut.getResultArray();
    this.productNewList1 = [
      {
        famName     : 'AQUACER',
        productName : 'AQUACER 530',
        file        : 'TDS_AQUACER_530_EN.pdf'
      },

      {
        famName     : 'BYKO2BLOCK',
        productName : 'BYKO2BLOCK-1200',
        file        : 'TDS_BYKO2BLOCK-1200_EN.pdf'
      },

      {
        famName     : 'BYK',
        productName : 'BYK-SILCLEAN 3701',
        file        : 'TDS_BYK-SILCLEAN_3701_EN.pdf'
      },
      {
        famName     : 'BYK',
        productName : 'BYK-C 8003',
        file        : 'TDS_BYK-C_8003_EN.pdf'
      }
    ];
    this.productNewList2 = [
      {
        famName     : 'BYK',
        productName : 'BYK-1611',
        file        : 'TDS_BYK-1611_EN.pdf'
      },
      {
        famName     : 'BYK',
        productName : 'BYK-1617',
        file        : 'TDS_BYK-1617_EN.pdf'
      },
      {
        famName     : 'BYK',
        productName : 'BYK-1723',
        file        : 'TDS_BYK-1723_EN.pdf'
      },
      {
        famName     : 'BYK',
        productName : 'BYK-1724',
        file        : 'TDS_BYK-1724_EN.pdf'
      }];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewproductsPage');
  }

  openDataSheet(filename) {
   console.log(filename)
    const name = 'ng-book.pdf';
    //InAppBrowser.open('assets/ng-book.pdf','_system','location=yes');
    new InAppBrowser(`assets/productfiles/${filename}`, '_blank', 'location=no');

  }
}
