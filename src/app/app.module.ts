import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { VideosPage } from '../pages/videos/videos';
import { TestPage } from '../pages/test/test';
import { NavbarPage } from '../pages/navbar/navbar';
import { VideomodalPage } from '../pages/videomodal/videomodal';
import { PdfmodalPage } from '../pages/pdfmodal/pdfmodal';
import { EbooksPage } from '../pages/ebooks/ebooks';
import { ProductssolutionsPage } from '../pages/productssolutions/productssolutions';
import { SomethingnewPage } from '../pages/somethingnew/somethingnew';
import { MarketsPage } from '../pages/markets/markets';
import { NewsPage } from '../pages/news/news';
import { DataGlancePage } from '../pages/data-glance/data-glance';
import { PicmodalPage } from '../pages/picmodal/picmodal';
import { MediainterviewPage } from '../pages/mediainterview/mediainterview';
import { NewproductsPage } from '../pages/newproducts/newproducts';
import { ProductoverviewPage } from '../pages/productoverview/productoverview';
import { ProductModalsPage } from '../pages/product-modals/product-modals';
import { ProductOVDetailsPage } from '../pages/product-ov-details/product-ov-details';

// products Group
import {ProductsgroupsPage} from  '../pages/productsgroups/productsgroups';

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




// services
import {ContentForm} from '../providers/content-form';
import {UtilityService} from '../providers/utility-service';
import {OrderBy} from '../providers/orderBy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    VideosPage,
    TestPage,
    NavbarPage,
    VideomodalPage,
    PdfmodalPage,
    EbooksPage,
    ProductsgroupsPage,
    ProductssolutionsPage,
    SomethingnewPage,
    MarketsPage,
    NewsPage,
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
    MarketsPage,
    ProductModalsPage,
    OrderBy,
    ProductOVDetailsPage




  ],
  imports: [
    IonicModule.forRoot(MyApp,
      {tabsPlacement: 'top',
        iconMode:'ios',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        pageTransition: 'ios',
        platforms: {
          ios: {
            statusbarPadding: true
          }
        }
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    VideosPage,
    TestPage,
    NavbarPage,
    VideomodalPage,
    PdfmodalPage,
    EbooksPage,
    ProductsgroupsPage,
    ProductssolutionsPage,
    SomethingnewPage,
    MarketsPage,
    NewsPage,
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
    MarketsPage,
    ProductModalsPage,
    ProductOVDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ContentForm,UtilityService]
})
export class AppModule {}
