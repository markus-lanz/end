import { Component,animate,transition,trigger,state,style  } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ContentForm } from '../../providers/content-form';
import { FormPage } from "../form/form";
import { TestPage } from "../test/test";
import { DataGlancePage } from "../data-glance/data-glance";
import{SomethingnewPage} from'../somethingnew/somethingnew';
import {ProductsgroupsPage} from '../productsgroups/productsgroups';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('visibilityChanged', [
      state('true' , style({
          transform: 'translate3d(0, 0, 0)'})),
  state('false', style({ opacity: 0 })),
  transition('1 => 0', animate('200ms ')),
  transition('0 => 1', animate('200ms ')),
]),
    trigger('visibilityImgChanged', [
      state('true' , style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('1 => 0', animate('200ms ')),
      transition('0 => 1', animate('200ms ')),
    ])]
})
export class HomePage {

  pageName = null;

  pages: Array<{title: string, component: any,icon:string}>;

  wizzardStep:string = null;

  constructor(public navCtrl: NavController,public cFormService:ContentForm,public navParams: NavParams) {
    this.wizzardStep = cFormService.getWizzardStep();
    console.log('Hello ContentForm Provider');
    //navCtrlHome.setRoot(HomePage);
    this.pages = [
      { title: 'TEST', component: TestPage,icon: 'calendar' }];


    this.pageName = DataGlancePage;

  }


  navigateToPage( pageInstanceName ){
    console.log(this.navCtrl.getViews());
    this.navCtrl.push( pageInstanceName, {from: 'StartSeite', to:'Form', fromTab : false} );
  }

  shown:string = '';
  showImgC1:boolean =true;
  showImgC2:boolean =true;
  showImgC3:boolean =true;
  showImgC4:boolean =true;
  showImgC5:boolean =true;

  showbtnC1:boolean =true;
  showbtnC2:boolean =true;
  showbtnC3:boolean =true;
  showbtnC4:boolean =true;
  showbtnC5:boolean =true;

  resetBtn(card:string){
    switch(card){
      case "card1":
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card2":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card3":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card4":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card5":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        break;
    }
  }


  CardIsClicked(card :string){
    switch(card){
      case "card1":
        this.shown = 'card1';
        this.showImgC1 =false;
        this.showbtnC1 = false;
        this.resetBtn(card);
        break;
      case "card2":
        this.shown = 'card2';
        this.showImgC2 =false;
        this.showbtnC2 = false;
        this.resetBtn(card);
        break;
      case "card3":
        this.shown = 'card3';
        this.showImgC3 =false;
        this.showbtnC3 = false;
        this.resetBtn(card);
        break;
      case "card4":
        this.shown = 'card4';
        this.showImgC4 =false;
        this.showbtnC4 = false;
        this.resetBtn(card);
        break;
      case "card5":
        this.shown = 'card5';
        this.showImgC5 =false;
        this.showbtnC5 = false;
        this.resetBtn(card);
        break;
    }
  }
  CardIsClickedBack(card :string){
    switch(card){
      case "card1":
        this.shown = '';
        this.showImgC1 =true;
        this.showbtnC1 = true;
        break;
      case "card2":
        this.shown = '';
        this.showImgC2 =true;
        this.showbtnC2 = true;
        break;
      case "card3":
        this.shown = '';
        this.showImgC3 = true;
        this.showbtnC3 = true;
        break;
      case "card4":
        this.shown = '';
        this.showImgC4 = true;
        this.showbtnC4 = true;
        break;
      case "card5":
        this.shown = '';
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
    }
  }

  /*
  CardIsClicked(event){
    switch (event){

    }


    if(this.shown){
      this.shown =false;
    } else{
      this.shown=true;
    }

    console.log(event);

  }*/
}
