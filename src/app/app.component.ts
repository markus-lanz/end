import { Component,ViewChild } from '@angular/core';
import { Platform,Events,MenuController, Nav,ToastController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage }   from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';
import { TestPage }   from '../pages/test/test';
import { NewsPage }   from '../pages/news/news';
import { EbooksPage } from '../pages/ebooks/ebooks';
//
import { MarketsPage } from '../pages/markets/markets';

import {NavbarPage} from '../pages/navbar/navbar'
import {VideomodalPage} from '../pages/videomodal/videomodal'

// menu 1
import  {FormPage} from '../pages/form/form';
import {DataGlancePage} from '../pages/data-glance/data-glance';

// menu 2
import{NewproductsPage} from '../pages/newproducts/newproducts';
import{ProductoverviewPage} from '../pages/productoverview/productoverview';
import {MediainterviewPage} from '../pages/mediainterview/mediainterview';


import{ProductsgroupsPage} from '../pages/productsgroups/productsgroups';

// market
import{DeCoatingsPage} from '../pages/de-coatings/de-coatings';
import{WoodFurniturePage} from '../pages/wood-furniture/wood-furniture';
import{TransportationPage} from '../pages/transportation/transportation';
import{MarineprotectivePage} from '../pages/marineprotective/marineprotective';
import{SpecialCoatingsPage} from '../pages/special-coatings/special-coatings';

// products Solutions
import{TechnicalBroshuresPage} from '../pages/technical-broshures/technical-broshures';
import{TechDataSheetPage} from '../pages/tech-data-sheet/tech-data-sheet';
import {AdditivesGuidePage} from '../pages/additives-guide/additives-guide';
import{LapappVideosPage} from '../pages/lapapp-videos/lapapp-videos';
import{BrandsPage} from '../pages/brands/brands';



import xml2js from 'xml2js';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {UtilityService} from "../providers/utility-service";



export interface PageInterface {
  title: string;
  component: any;
  icon:string,
  index?:number,
  tabComponent?:any
}



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav:Nav;
  rootPage:any = TestPage;
  tapPages:Array<{title: string, component: any,tabComponent?: any,index?: number, icon?:string}>;

  MenuPages1:Array<{title: string, component: any,tabComponent?: any,index?: number,icon:string}>;
  MenuPages2:Array<{title: string, component: any,tabComponent?: any,index?: number,icon:string}>;
  MenuPages3:Array<{title: string, component: any,tabComponent?: any,index?: number,icon:string}>;
  MenuPages4:Array<{title: string, component: any,tabComponent?: any,index?: number,icon:string}>;
  MenuPages5:Array<{title: string, component: any,tabComponent?: any,index?: number,icon:string}>;


  public xmlItems:any;

  constructor(public platform:Platform,
              public menu:MenuController,
              public http:Http,
              public toastCtrl:ToastController,
              public utilityService:UtilityService) {
    this.initializeApp();

    // set our app's pages
    this.tapPages = [
      {title: 'StartSeite', component: TestPage, tabComponent: HomePage, index: 0, icon: 'contacts'},
      {title: 'Video', component: TestPage,tabComponent:VideosPage,index: 2,icon: 'information-circle'},
      {title: 'Ebooks', component: TestPage, tabComponent: EbooksPage, index: 4, icon: 'ios-book'},
      {title: 'News', component: TestPage, tabComponent: NewsPage, index: 3, icon: 'ios-book'},

    ];
    /**
     * {title: 'Home', component: HomePage, icon: 'information-circle'},
     {title: 'Ebooks', component: TestPage, tabComponent: EbooksPage, index: 4, icon: 'ios-book'},
     {title: 'Ebooks', component: EbooksPage, icon: 'ios-book'}
     * @type {{title: string, component: TestPage, tabComponent: HomePage, index: number, icon: string}|{title: string, component: DataGlancePage, icon: string}|{title: string, component: TestPage, tabComponent: DataGlancePage, index: number, icon: string}[]}
       */
    //  this.openPage(this.pages[0].component);

    // SHOW NEWS
    this.MenuPages1 = [
      {title: 'New Products', component: NewproductsPage, icon: 'calendar'},
      {title: 'ECS Show News', component: TestPage, tabComponent: NewsPage, index: 3, icon: 'ios-book'},
      {title: 'Product Overview', component: ProductoverviewPage, icon: 'contacts'},
      {title: 'Media Interview', component: MediainterviewPage,icon: 'information-circle'}
    ];

    // START SOMETHING NEW!
    this.MenuPages2 = [
      {title: 'Exhabition Report', component: DataGlancePage, icon: 'calendar'},
      {title: 'BYK at a glance',   component: TestPage, tabComponent: DataGlancePage, index: 5, icon: 'ios-book'},
      {title: 'Product Groups',    component: ProductsgroupsPage, icon: 'contacts'},
      {title: 'Video',             component: TestPage, tabComponent: VideosPage,index: 2,icon: 'information-circle'},
      {title: 'News',              component: TestPage, tabComponent: NewsPage, index: 3, icon: 'ios-book'}
    ];

    // MARKETS
    this.MenuPages3 = [
      {title: 'Markets', component: TestPage, tabComponent: MarketsPage, index: 6, icon: 'calendar'},
      {title: 'DECORATIVE COATINGS', component: DeCoatingsPage, icon: 'calendar'},
      {title: 'WOOD & FURNITURE', component: WoodFurniturePage, icon: 'ios-book'},
      {title: 'Transportation', component: TransportationPage, icon: 'contacts'},
      {title: 'Marine & protective', component: MarineprotectivePage,icon: 'information-circle'},
      {title: 'Special Coatings ', component: SpecialCoatingsPage,icon: 'information-circle'}
    ];

    // PRODUCT GROUPS
    this.MenuPages4 = [
      {title: 'Technical Brochures', component: TechnicalBroshuresPage, icon: 'calendar'},
      {title: 'Technical Data Sheet', component:TechDataSheetPage, icon: 'ios-book'},
      {title: 'Additives Guide', component: AdditivesGuidePage, icon: 'contacts'},
      {title: 'LAP APP Videos', component: LapappVideosPage,icon: 'information-circle'},
      {title: 'Brands', component: BrandsPage,icon: 'information-circle'}
    ];

    this.utilityService.loadXml();
    this.utilityService.loadProductData();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.menu.open();
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(true);
     // StatusBar.backgroundColorByHexString('#ffffff');

      Splashscreen.hide();

    });

  }

  navigateTo(page){
    this.menu.close();
    this.nav.push(page);
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index,testData:page.title});
    } else {
    /*  this.nav.setRoot(page.component).catch(() => {

        console.log("Didn't set nav root");
      }); */
      // this.nav.setRoot(page.component);

      let fromTab = true;
      this.nav.push(page.component, true);
    }
  }
}
