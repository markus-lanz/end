// IMPORTS
import 'rxjs/add/operator/map';
import { Platform,
         Events,
         MenuController,
         Nav,
         ToastController           } from 'ionic-angular';
import { Http                      } from '@angular/http';
import { Component,
         ViewChild                 } from '@angular/core';
import { StatusBar,
         Splashscreen              } from 'ionic-native';
import { HomePage                  } from '../pages/home/home';
import { VideosPage                } from '../pages/videos/videos';
import { TabMainPage               } from '../pages/tab-main/tab-main';
import { ShowNewsPage              } from '../pages/NEWS/shownews/shownews';
import { EbooksPage                } from '../pages/ebooks/ebooks';
import { FormPage                  } from '../pages/form/form';

// - Menu 1
import { DataGlancePage            } from '../pages/data-glance/data-glance';
// - Menu 2
import { NewproductsPage           } from '../pages/NEWS/newproducts/newproducts';
import { ProductoverviewPage       } from '../pages/NEWS/productoverview/productoverview';
import { MediainterviewPage        } from '../pages/NEWS/mediainterview/mediainterview';
import { ProductsgroupsPage        } from '../pages/NEWS/productsgroups/productsgroups';
// - Markets
import { DeCoatingsPage            } from '../pages/MARKETS/de-coatings/de-coatings';
import { WoodFurniturePage         } from '../pages/MARKETS/wood-furniture/wood-furniture';
import { TransportationPage        } from '../pages/MARKETS/transportation/transportation';
import { MarineprotectivePage      } from '../pages/MARKETS/marineprotective/marineprotective';
import { SpecialCoatingsPage       } from '../pages/MARKETS/special-coatings/special-coatings';
// - Product Groups
import { WeetingDispersingPage     } from '../pages/PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';

// - Products & Solutions
import { TechnicalBroshuresPage    } from '../pages/technical-broshures/technical-broshures';
import { TechDataSheetPage         } from '../pages/tech-data-sheet/tech-data-sheet';
import { AdditivesGuidePage        } from '../pages/additives-guide/additives-guide';
import { LapappVideosPage          } from '../pages/lapapp-videos/lapapp-videos';
import { BrandsPage                } from '../pages/brands/brands';
// - PROVIDERS
import { UtilityService            } from '../providers/utility-service';



// INTERFACE
export interface PageInterface {
  title         : string;
  component     : any;
  icon          : string,
  index?        : number,
  tabComponent? : any
}


// COMPONENT
@Component( {
  templateUrl : 'app.html'
} )



// EXPORT
export class MyApp {

  @ViewChild( Nav ) nav : Nav;

  rootPage   : any = TabMainPage;

  //tapPages   : Array <{ title: string, component: any, tabComponent?: any, index?: number, icon: any }>;

  showNews       : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  byk            : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  markets        : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  productGroups  : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  MenuPages5     : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;

  public xmlItems : any;

  constructor( public platform       : Platform,
               public menu           : MenuController,
               public http           : Http,
               public toastCtrl      : ToastController,
               public utilityService : UtilityService) {


    this.initializeApp();


    // SHOW NEWS
    this.showNews = [
      { title: 'New Products',     component: TabMainPage, tabComponent: NewproductsPage,     index: 1 },
      { title: 'Product Overview', component: TabMainPage, tabComponent: ProductsgroupsPage,  index: 2 },
      { title: 'ECS Show News',    component: TabMainPage, tabComponent: ShowNewsPage,        index: 3 },
      { title: 'Media Interview',  component: TabMainPage, tabComponent: MediainterviewPage,  index: 4 }
    ];

    // BYK
    this.byk = [
      { title: 'Exhabition Report', component: TabMainPage, tabComponent: FormPage,            index: 5 },
      { title: 'BYK at a glance',   component: TabMainPage, tabComponent: DataGlancePage,      index: 6 },
      { title: 'Video',             component: TabMainPage, tabComponent: VideosPage,          index: 7 },
    ];

    // MARKETS
    this.markets = [
      { title: 'Decorative coatings', component: TabMainPage, tabComponent: DeCoatingsPage,       index:  8 },
      { title: 'Wood & furniture',    component: TabMainPage, tabComponent: WoodFurniturePage,    index:  9 },
      { title: 'Transportation',      component: TabMainPage, tabComponent: TransportationPage,   index: 10 },
      { title: 'Marine & protective', component: TabMainPage, tabComponent: MarineprotectivePage, index: 11 },
      { title: 'Special Coatings ',   component: TabMainPage, tabComponent: SpecialCoatingsPage,  index: 12 }
    ];

    // PRODUCT GROUPS
    this.productGroups = [
      { title: 'Wetting & Dispersing Additives',       component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 13 },
      { title: 'Surface Additives',                    component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 441 },
      { title: 'Rheology Additives',                   component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 41 },
      { title: 'Defoamers & Air Release Additives',    component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 41 },
      { title: 'Wax Additives',                        component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 41 },
      { title: 'Adhesion Promoters & Coupling Agents', component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 41 },
      { title: 'Viscosity Reducers',                   component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 41 },
      { title: 'Processing Additives',                 component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 41 },


      { title: 'Technical Brochures',  component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 11 },
      { title: 'Technical Data Sheet', component: TabMainPage, tabComponent: TechDataSheetPage,      index : 11 },
      { title: 'Additives Guide',      component: TabMainPage, tabComponent: AdditivesGuidePage,     index : 11 },
      { title: 'LAP APP Videos',       component: TabMainPage, tabComponent: LapappVideosPage,       index : 11 },
      { title: 'Brands',               component: TabMainPage, tabComponent: BrandsPage,             index : 11 }
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
      console.log('AAA')
      console.log(page.index)
      console.log(page.title)
      this.nav.setRoot( page.component, { tabIndex : page.index, testData : page.title } );
    } else {
    /*  this.nav.setRoot(page.component).catch(() => {

        console.log("Didn't set nav root");
      }); */
      // this.nav.setRoot(page.component);

      this.nav.push(page.component, true);
    }
  }
}
