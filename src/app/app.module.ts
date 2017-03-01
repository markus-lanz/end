// IMPORTS
import { NgModule,
         ErrorHandler           } from '@angular/core';
import { IonicApp,
         IonicModule,
         IonicErrorHandler      } from 'ionic-angular';
import { MyApp                  } from './app.component';
import { HomePage               } from '../pages/home/home';
import { FormPage               } from '../pages/form/form';
import { VideosPage             } from '../pages/videos/videos';
import { TabMainPage            } from '../pages/tab-main/tab-main';
import { NavbarPage             } from '../pages/navbar/navbar';
import { VideomodalPage         } from '../pages/videomodal/videomodal';
import { PdfmodalPage           } from '../pages/pdfmodal/pdfmodal';
import { EbooksPage             } from '../pages/ebooks/ebooks';
import { ProductssolutionsPage  } from '../pages/productssolutions/productssolutions';
import { SomethingnewPage       } from '../pages/somethingnew/somethingnew';
import { ShowNewsPage           } from '../pages/NEWS/shownews/shownews';
import { DataGlancePage         } from '../pages/data-glance/data-glance';
import { PicmodalPage           } from '../pages/picmodal/picmodal';
import { MediainterviewPage     } from '../pages/NEWS/mediainterview/mediainterview';
import { NewproductsPage        } from '../pages/NEWS/newproducts/newproducts';
import { ProductoverviewPage    } from '../pages/NEWS/productoverview/productoverview';
import { ProductModalsPage      } from '../pages/product-modals/product-modals';
import { ProductOVDetailsPage   } from '../pages/product-ov-details/product-ov-details';
// - Products Group
import { ProductsgroupsPage     } from  '../pages/NEWS/productsgroups/productsgroups';
// - Market
import{ DeCoatingsPage          } from '../pages/MARKETS/de-coatings/de-coatings';
import{ WoodFurniturePage       } from '../pages/MARKETS/wood-furniture/wood-furniture';
import{ TransportationPage      } from '../pages/MARKETS/transportation/transportation';
import{ MarineprotectivePage    } from '../pages/MARKETS/marineprotective/marineprotective';
import{ SpecialCoatingsPage     } from '../pages/MARKETS/special-coatings/special-coatings';
// - Products Solutions
import { TechnicalBroshuresPage } from '../pages/technical-broshures/technical-broshures';
import { TechDataSheetPage      } from '../pages/tech-data-sheet/tech-data-sheet';
import { AdditivesGuidePage     } from '../pages/additives-guide/additives-guide';
import { LapappVideosPage       } from '../pages/lapapp-videos/lapapp-videos';
import { BrandsPage             } from '../pages/brands/brands';
// - Services
import { ContentForm            } from '../providers/content-form';
import { UtilityService         } from '../providers/utility-service';
import { OrderBy                } from '../providers/orderBy';


// MODULE
@NgModule( {
  declarations    : [
    MyApp,
    HomePage,
    FormPage,
    VideosPage,
    TabMainPage,
    NavbarPage,
    VideomodalPage,
    PdfmodalPage,
    EbooksPage,
    ProductsgroupsPage,
    ProductssolutionsPage,
    SomethingnewPage,
    ShowNewsPage,
    DataGlancePage,
    PicmodalPage,
    ProductoverviewPage,
    ProductsgroupsPage,
    NewproductsPage,
    MediainterviewPage,
    DeCoatingsPage,
    WoodFurniturePage,
    TransportationPage,
    MarineprotectivePage,
    SpecialCoatingsPage,
    TechnicalBroshuresPage,
    TechDataSheetPage,
    AdditivesGuidePage,
    LapappVideosPage,
    BrandsPage,
    ProductModalsPage,
    OrderBy,
    ProductOVDetailsPage
  ],
  imports         : [
    IonicModule.forRoot( MyApp,
      { tabsPlacement  : 'top',
        iconMode       : 'ios',
        modalEnter     : 'modal-slide-in',
        modalLeave     : 'modal-slide-out',
        pageTransition : 'ios',
        platforms : {
          ios : {
            statusbarPadding : true
          }
        }
      }
    )
  ],
  bootstrap       : [ IonicApp ],
  entryComponents : [
    MyApp,
    HomePage,
    FormPage,
    VideosPage,
    TabMainPage,
    NavbarPage,
    VideomodalPage,
    PdfmodalPage,
    EbooksPage,
    ProductsgroupsPage,
    ProductssolutionsPage,
    SomethingnewPage,
    ShowNewsPage,
    DataGlancePage,
    PicmodalPage,
    ProductoverviewPage,
    ProductsgroupsPage,
    NewproductsPage,
    MediainterviewPage,
    DeCoatingsPage,
    WoodFurniturePage,
    TransportationPage,
    MarineprotectivePage,
    SpecialCoatingsPage,
    TechnicalBroshuresPage,
    TechDataSheetPage,
    AdditivesGuidePage,
    LapappVideosPage,
    BrandsPage,
    ProductModalsPage,
    ProductOVDetailsPage
  ],
  providers       : [ { provide : ErrorHandler, useClass : IonicErrorHandler }, ContentForm, UtilityService ]
} )


// EXPORT
export class AppModule {}
