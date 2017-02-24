import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import {HomePage} from '../home/home';
import {FormPage} from '../form/form';
import {VideosPage} from'../videos/videos';
import {NewsPage} from'../news/news';
import{EbooksPage} from '../ebooks/ebooks';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  tab1 = HomePage;
  tab2 = FormPage;
  tab3 = VideosPage;
  tab4 = NewsPage;
  tab5 = EbooksPage;
  mySelectedIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navCtrl.canGoBack())
    this.mySelectedIndex = navParams.data.tabIndex || 0;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
