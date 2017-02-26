import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{UtilityService} from '../../providers/utility-service';
import{OrderBy} from '../../providers/orderBy';
import{ProductOVDetailsPage} from '../product-ov-details/product-ov-details';
/*
  Generated class for the Productoverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productoverview',
  templateUrl: 'productoverview.html',

})
export class ProductoverviewPage {
   productCategory = null;
  productA= null;
  productB = null;
  productC = null;
  productD = null;
  productF = null;
  productG = null;
  productH = null;
  productL = null;
  productM = null;
  productN = null;
  productO = null;
  productR = null;
  productS = null;
  productT = null;
  productV = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ut:UtilityService) {
  this.productCategory = ut.getResultArray();
  console.log(this.productCategory)
   this.productA = this.productCategory['A'];
  this.productB = this.productCategory['B'];
  this.productC = this.productCategory['C'];
  this.productD = this.productCategory['D'];
  this.productF = this.productCategory['F'];
  this.productG = this.productCategory['G'];
  this.productH = this.productCategory['H'];
  this.productL = this.productCategory['L'];
  this.productM = this.productCategory['M'];
  this.productN = this.productCategory['N'];
  this.productO = this.productCategory['O'];
  this.productR = this.productCategory['R'];
  this.productS = this.productCategory['S'];
  this.productT = this.productCategory['T'];
  this.productV = this.productCategory['V'];
  console.log(this.productA);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoverviewPage');
  }
  gotoDetailsPage(data,dataCat){
    console.log(data);
    this.navCtrl.push(ProductOVDetailsPage,{famName:data,cat:dataCat});
  }
}
