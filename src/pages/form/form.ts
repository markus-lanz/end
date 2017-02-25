import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ViewController,ModalController,ToastController} from 'ionic-angular';
import {ContentForm} from '../../providers/content-form';
import {Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {PicmodalPage} from '../picmodal/picmodal';

/*
  Generated class for the Form page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  wizzardStep:string = null;




  activitiesObject ={};
  contentFromModel= null;
  myForm;
  contentFromService =  null;
  ordersObject = {};
  literaturObject = {};
  authorObject = {};
  units= null;
  products = null;
  authors = null;
  from :any;
  to:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
                public alertCtrl : AlertController, public cFormService:ContentForm,private formBuilder: FormBuilder,
  public viewCtrl: ViewController,public modalCtrl:ModalController,public toastCtrl:ToastController) {

    this.contentFromService = cFormService;
    this.wizzardStep = cFormService.getWizzardStep();
    this.contentFromModel = cFormService.getNewContentFormModel();
    this.activitiesObject = cFormService.getNewRequiredAction();
     this.ordersObject = cFormService.getNewOrder();
    this.products = cFormService.getProductsData();
    this.units= cFormService.getUnits();
    this.literaturObject = cFormService.getNewLiteratur();
    this.authors = cFormService.getAuthorName();
    console.log('Hello ContentForm Provider');
    console.log(this.wizzardStep);
    this.from = navParams.data.from;
    this.to = navParams.data.to;



  }

// dispaly picViewer

  presentPicModal(){
    let picModal = this.modalCtrl.create(PicmodalPage);
    picModal.present();
    picModal.onDidDismiss(data =>{
      (<HTMLImageElement>document.getElementById('bsCard')).src = data;

    });
  }

  logForm() {
    console.log(this.myForm)
  }

  step_1 = false;
  step_2 = true;
  step_3 = true;
  step_4 = true;
  step_5 = true;
  step_6 = true;
  step_7 = true;
  step_8 = true;
  step_9 = true;


  nextStep(wizzardStep :string){
    switch(wizzardStep){
      case "visitor_data":
        this.wizzardStep = 'meetings_details';
        this.step_2 = false;
        break;
     case "meetings_details":
        this.wizzardStep = 'required_actions';
       this.step_3 = false;
            break;
     case "required_actions":
       this.wizzardStep= 'sample_order';
       this.step_4 = false;
            break;
     case "sample_order":
       this.wizzardStep='literatur';
       this.step_5 = false;
       break;
     case "literatur":
       this.wizzardStep ='role_class';
       this.step_6 = false;
       break;
     case "role_class":
       this.wizzardStep='end_use';
       this.step_7 = false;
            break;
     case "end_use":
            this.wizzardStep = 'author_date';
       this.step_8 = false;
            break;
     case "author_date":
       this.wizzardStep = 'process';
       this.step_9 = false;
       break;
     case "process":
      // this.wizzardStep = 'process';
       break;

    }
  }

  prvStep(preStep:string){
  switch(preStep){
  case "meetings_details":
    this.wizzardStep = 'visitor_data';
    break;
  case "required_actions":
    this.wizzardStep= 'meetings_details';
    break;
  case "sample_order":
    this.wizzardStep='required_actions';
    break;
  case "literatur":
    this.wizzardStep ='sample_order';
    break;
  case "role_class":
    this.wizzardStep='literatur';
    break;
  case "end_use":
    this.wizzardStep = 'role_class';
    break;
  case "author_date":
    this.wizzardStep = 'end_use';
    break;
  case "process":
     this.wizzardStep = 'author_date';
    break;

  }
}


save(form){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
    this.scanBsCardAlert();
    this.viewCtrl.setBackButtonText(this.from);
  }

  // open Modal to Scan Business Card
  scanBsCardAlert(){
    let alert =  this.alertCtrl.create({
      title: 'SCAN BUSINESS CARD?',
      message: 'Please take a business card and scan it with the camera of this device',
     // cssClass :'alert-wrapper',
      buttons: [
        {
          text: 'Quit',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OPEN CAMERA AND SCAN',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }


  addNewAuthor(event){
    // TODO save author in localStorage
  }



  addActivity(event) {
   this.contentFromModel.required_action.push(this.activitiesObject);
    this.activitiesObject = {};
    event.preventDefault();
  }

  deleteActivity(index) {
    this.contentFromModel.required_action.splice(index, 1);
  }
  addOrder(event){
    this.contentFromModel.orders.push(this.ordersObject);
    this.ordersObject = {}//this.cFormService.getNewOrder();
    event.preventDefault();
  }

  deleteOrder(index){
    this.contentFromModel.orders.splice(index,1);
  }

  // literatur
  addLiteratur(event){
    this.contentFromModel.literatur.push(this.literaturObject);
    this.literaturObject ={};
  }

  deleteLiteratur(index){
    this.contentFromModel.literatur.splice(index,1);
  }

   searchQuery:string = '';

  getProducts(ev:any){
     this.products = this.cFormService.getProductsData();
    //this.cFormService.initializeItems();
    // set val to the Value of the searchbar
    let val = ev.target.value;
   console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.products = this.products.filter( (item) =>{
        console.log(item.title)
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
/*
  parseResutl(){
    this.cFormService.parseJsonToXML(this.contentFromModel);
  }
  */
}
