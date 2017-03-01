import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import  {FormPage} from '../form/form';
import {VideosPage} from '../BYK/videos/videos';
import {TestPage} from '../tab-main/test';

// services
import {ContentForm} from '../providers/content-form';
/*
  Generated class for the Navbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  currentPage:string;
  ionViewDidLoad() {
    console.log('ionViewDidLoad NavbarPage');
    this.currentPage = 'home'
  }

  navigate(page){
    switch(page){
      case 'home':
        this.navCtrl.push(HomePage);
        this.currentPage = 'Home';

    break;
      case 'video':
        this.navCtrl.push(VideosPage);
        this.currentPage = 'Video';
        break;
      case 'form':
        this.navCtrl.push(FormPage);
        this.currentPage= 'Form';
        break;
    }

  }
}
