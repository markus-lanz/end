// IMPORTS
import 'rxjs/add/operator/map';
import { Platform,
         MenuController,
         Nav,
         ToastController           } from 'ionic-angular';
import { Http                      } from '@angular/http';
import { Component,
         ViewChild                 } from '@angular/core';
import { StatusBar,
         Splashscreen              } from 'ionic-native';
import { VideosPage                } from '../pages/BYK/videos/videos';
import { TabMainPage               } from '../pages/tab-main/tab-main';
import { FormPage                  } from '../pages/form/form';

// - News
import { ShowNewsPage              } from '../pages/NEWS/shownews/shownews';
import { NewproductsPage           } from '../pages/NEWS/newproducts/newproducts';
import { MediainterviewPage        } from '../pages/NEWS/mediainterview/mediainterview';
import { ProductsgroupsPage        } from '../pages/NEWS/productsgroups/productsgroups';
import { ProductPresentationsPage  } from '../pages/NEWS/product-presentations/product-presentations';

// - Byk
import { DataGlancePage            } from '../pages/BYK/data-glance/data-glance';

// - Markets
import { DeCoatingsPage            } from '../pages/MARKETS/de-coatings/de-coatings';
import { WoodFurniturePage         } from '../pages/MARKETS/wood-furniture/wood-furniture';
import { TransportationPage        } from '../pages/MARKETS/transportation/transportation';
import { MarineprotectivePage      } from '../pages/MARKETS/marineprotective/marineprotective';
import { SpecialCoatingsPage       } from '../pages/MARKETS/special-coatings/special-coatings';

// - Product Groups
import { WeetingDispersingPage     } from '../pages/PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { WaxAdditivesPage          } from '../pages/PRODUCTGROUPS/wax-additives/wax-additives';

// - Products & Solutions
import { TechnicalBroshuresPage    } from '../pages/PRODUCTSSOLUTIONS/technical-broshures/technical-broshures';
import { TechDataSheetPage         } from '../pages/PRODUCTSSOLUTIONS/tech-data-sheet/tech-data-sheet';
import { AdditivesGuidePage        } from '../pages/PRODUCTSSOLUTIONS/additives-guide/additives-guide';
import { LapappVideosPage          } from '../pages/PRODUCTSSOLUTIONS/lapapp-videos/lapapp-videos';
import { BrandsPage                } from '../pages/PRODUCTSSOLUTIONS/brands/brands';
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

  rootPage          : any = TabMainPage;

  showNews          : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  byk               : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  markets           : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  productGroups     : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;
  productssolutions : Array <{ title: string, component: any, tabComponent?: any, index?: number }>;

  public xmlItems   : any;

  constructor( public platform       : Platform,
               public menu           : MenuController,
               public http           : Http,
               public toastCtrl      : ToastController,
               public utilityService : UtilityService ) {


    this.initializeApp();


    // SHOW NEWS
    this.showNews = [
      { title: 'New Products',                   component: TabMainPage, tabComponent: NewproductsPage,          index: 1 },
      { title: 'ECS Show News',                  component: TabMainPage, tabComponent: ShowNewsPage,             index: 2 },
      { title: 'Product Overview',               component: TabMainPage, tabComponent: ProductsgroupsPage,       index: 3 },
      { title: 'ECS Product Presentations Live', component: TabMainPage, tabComponent: ProductPresentationsPage, index: 4 },
      { title: 'ECS Media Interviews',           component: TabMainPage, tabComponent: MediainterviewPage,       index: 5 }
    ];

    // BYK
    this.byk = [
      { title: 'Exhibition Report', component: TabMainPage, tabComponent: FormPage,       index: 6 },
      { title: 'BYK at a Glance',   component: TabMainPage, tabComponent: DataGlancePage, index: 7 },
      { title: 'Video',             component: TabMainPage, tabComponent: VideosPage,     index: 8 },
    ];

    // MARKETS
    this.markets = [
      { title: 'Decorative coatings', component: TabMainPage, tabComponent: DeCoatingsPage,       index:  9 },
      { title: 'Wood & furniture',    component: TabMainPage, tabComponent: WoodFurniturePage,    index: 10 },
      { title: 'Transportation',      component: TabMainPage, tabComponent: TransportationPage,   index: 11 },
      { title: 'Marine & protective', component: TabMainPage, tabComponent: MarineprotectivePage, index: 12 },
      { title: 'Special Coatings ',   component: TabMainPage, tabComponent: SpecialCoatingsPage,  index: 13 }
    ];

    // PRODUCT GROUPS
    this.productGroups = [
      { title: 'Wetting & Dispersing Additives',       component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Surface Additives',                    component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Rheology Additives',                   component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Defoamers & Air Release Additives',    component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Wax Additives',                        component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
      { title: 'Adhesion Promoters & Coupling Agents', component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
      { title: 'Viscosity Reducers',                   component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
      { title: 'Processing Additives',                 component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
    ];

    // PRODUCTS & SOLUTIONS
    this.productssolutions = [
      { title: 'Technical Brochures',    component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 16 },
      { title: 'Technical Data Sheets',  component: TabMainPage, tabComponent: TechDataSheetPage,      index :  3 },
      { title: 'Additive Guide',         component: TabMainPage, tabComponent: AdditivesGuidePage,     index : 17 },
      { title: 'Lab Application Videos', component: TabMainPage, tabComponent: LapappVideosPage,       index : 18 },
      { title: 'Brands of BYK',          component: TabMainPage, tabComponent: BrandsPage,             index : 19 }
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
