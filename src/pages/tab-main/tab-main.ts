/*
 Generated class for the TabMain page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


// IMPORTS
import { NavController,
         NavParams           } from 'ionic-angular';
import { Component           } from '@angular/core';
import { HomePage            } from '../home/home';
import { FormPage            } from '../form/form';
import { VideosPage          } from '../videos/videos';
import { EbooksPage          } from '../ebooks/ebooks';
import { DataGlancePage      } from '../data-glance/data-glance';
// - News
import { ShowNewsPage        } from '../NEWS/shownews/shownews';
import { NewproductsPage     } from '../NEWS/newproducts/newproducts';
import { MediainterviewPage  } from '../NEWS/mediainterview/mediainterview';
import { ProductoverviewPage } from '../NEWS/productoverview/productoverview';
// - Markets
import { DeCoatingsPage      } from '../MARKETS/de-coatings/de-coatings';
import { WoodFurniturePage   } from '../MARKETS/wood-furniture/wood-furniture';
// - Byk





// COMPONENT
@Component( {
  selector    : 'page-tab-main',
  templateUrl : 'tab-main.html'
} )


// EXPORT
export class TabMainPage {

  pagesInTabs = {};

  mySelectedIndex: number;

  constructor( public navCtrl: NavController, public navParams: NavParams ) {

    this.pagesInTabs = {
      home            : HomePage,

      news            : ShowNewsPage,
      newproducts     : NewproductsPage,
      productoverview : ProductoverviewPage,
      mediainterview  : MediainterviewPage,

      form            : FormPage,
      dataglance      : DataGlancePage,
      videos          : VideosPage,

      decorativecatings : DeCoatingsPage,
      woodsfurniture  : WoodFurniturePage,
      ebooks          : EbooksPage

    };

    //console.log(navCtrl.canGoBack())
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    //console.log(this.mySelectedIndex)

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
