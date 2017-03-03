import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {File} from 'ionic-native';
declare let cordova: any;
import {UtilityService} from '../providers/utility-service';
import {ToastController} from 'ionic-angular';
import 'jsonfile';


declare let jsonfile: any;




/*
 Generated class for the ContentForm provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ContentForm {

  constructor(public http:Http,public ut:UtilityService ,public toastCtrl:ToastController) {
    console.log('Hello ContentForm Provider');
    console.log('s')
  }

  _products = [
    {title: 'one'},
    {title: 'two'},
    {title: 'three'},
    {title: 'four'},
    {title: 'five'},
    {title: 'six'}
  ];
  _units = [
    {title: 'one'},
    {title: 'two'},
    {title: 'three'},
    {title: 'four'},
    {title: 'five'},
    {title: 'six'}
  ];
  getUnits():any{
    return this._units;
  }
  getProductsData():any {
    return this._products;
  }

  // ContentForm Setter and getter Method
  _wizzardStep = "visitor_data";

  getWizzardStep():any {
    return this._wizzardStep;
  }

  setWizzardStep(step:string) {
    this._wizzardStep = step;
  }

  _newContentFormModel = {
    'name': null,
    'gendar': '',
    'company': '',
    'dept': '',
    'adress': '',
    'country': '',
    'language': '',
    'phone': '',
    'fax': '',
    'e_mail': '',
    'crm_record': {
      'yes': null,
      'no': null,
      'details': null
    },
    'required_action': [],
    'orders': [],
    'orderNewProduct':'',
    'literatur':[],
    'addionalInformationToOrder':'',
    'Mr':null,
    'Mrs':null,

    'endUseOthers':'',
    'authorName':'',
    'authorEmail':'',
    'date':''
  };

  _endUseArray =
      [
        {title:'Architectural', checked:false},
        {title:'Automotive OEM/Refinish', checked:false},
        {title:'Can Coating', checked:false},
        {title:'Flooring', checked:false},
        {title:'General Industry', checked:false},
        {title:'Marine & Protective', checked:false},
        {title:'Other Transportation', checked:false},
        {title:'Powder', checked:false},
        {title:'Printing Links', checked:false},
        {title:'Wood', checked:false},
        {title:'Construction Chemicals', checked:false},
        {title:'Adhesives & Sealants', checked:false},
        {title:'FDP', checked:false},
        {title:'Others', checked:false}
      ];
  getEndUseArray():any{
    return this._endUseArray;
  }

  _productGroupArray = [
    {title:'Air Release/ Defoamers',checked:false},
    {title:'Anti-Emission',checked:false},
    {title:'Conductivity',checked:false},
    {title:'Levelling Agent',checked:false},
    {title:'Nanotechnology',checked:false},
    {title:'Process Agent (Incl. Modifiers, Coupling)',checked:false},
    {title:'Rheology',checked:false},
    {title:'Surface',checked:false},
    {title:'Viscosity reducer',checked:false},
    {title:'Wax',checked:false},
    {title:'Wetting & Dispersing',checked:false},
    {title:'Others',checked:false},

  ];

  getProductGroupArray():any{
    return this._productGroupArray;
  }
  _customerRolle =[
    {title:'Direct Customer',checked:false},
    {title:'Indirect Customer',checked:false},
    {title:'Prospect',checked:false},
    {title:'Distributor / Agent',checked:false},
    {title:'Competitor',checked:false},
    {title:'Partner',checked:false},
    {title:'Raw Material Supplier',checked:false},
    {title:'R&D Partner / Institute',checked:false},
    {title:'Consultancy',checked:false},
    {title:'Press/PR',checked:false}
  ];
  getCustomerRolle():any{
    return this._customerRolle;
  }

  _classificationArray = [
    {title:'Technical', checked:false},
    {title:'Commercial', checked:false},
    {title:'Complaint', checked:false}
  ];
  getClassificationArray():any{
    return this._classificationArray;
  }

  _newAuthor =
  { name:'',
    email:''

  }

  getNewAuthor():any{
    return this._newAuthor;
  }



  _order = {
    'product': '',
    'unit': ''
  };
  _authorNames= [
    {
      name:'Max',
      email:'Email@test.com'
    },
    {
      name:'MaxMusterMann_1',
      email:'Email@test.com'
    },
    {
      name:'MaxMusterMann_2',
      email:'Email@test.com'
    }
  ];

  getAuthorName():any{
    return this._authorNames;
  }

  _literatur ={
    'topic':''
  }
  getNewLiteratur():any{
    return this._literatur;
  }

  getNewOrder():any {
    return this._order;
  }


  getNewContentFormModel():any {
    return this._newContentFormModel;
  }

  setNewContentFormModel(model:any) {
    this._newContentFormModel = model;
  }

  _newRequiredAction = {
    'activity': '',
    'who': ''
  };

  getNewRequiredAction():any {
    return this._newRequiredAction;
  }

  parseJsonToXML(model):any{

    const fs:string = cordova.file.externalDataDirectory;
    const dirName:string ='APP_DATA';
    File.checkDir(fs,dirName).then(
        ()=>{
          let tostsucees= this.toastCtrl.create({
            message:`${dirName} existiert bereit`,
            showCloseButton: true,
            closeButtonText: 'Ok'
          });
          tostsucees.present();
          this.createFile(fs,dirName,model);
        }
    ).catch(
        () =>{
          File.createDir(fs,dirName,true).then( ()=>{
            this.ut.presentToast('success','erstelt');
            this.createFile(fs,dirName,model);

          }).catch( () =>{
            this.ut.presentToast('error','nicht geklappt');
          });

          let tost= this.toastCtrl.create({
            message: fs,
            showCloseButton: true,
            closeButtonText: 'Ok'
          });
          tost.present();
        });


  }
  createFile(dirPath,dirName,model){
    const path= `${dirPath}${dirName}`;
    const fileName ='newTempFile.json';
    let toastFileSucce = this.toastCtrl.create({
      message: path,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toastFileSucce.present();



    File.createFile(`${dirPath}${dirName}`,'newTempFile.json',true).then(
        () =>{
          let toastFileSuccess = this.toastCtrl.create({
            message: 'File Erstellung ist erfolgreich abgeschlossen',
            showCloseButton: true,
            closeButtonText: 'Ok'
          });
          toastFileSuccess.present();
          let filename = `${path}${fileName}`;
          let data = JSON.stringify(model);
          jsonfile.writeFile(fileName,model,{append:true}).then(
              () =>{
                let toastWirteFileSuccess = this.toastCtrl.create({
                  message: 'wirte ist erfolgreich abgeschlossen',
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toastWirteFileSuccess.present();

              }).catch( ()=>{
                let toastWirteFileError = this.toastCtrl.create({
                  message: 'File wirte ist Fehlgeschlagen',
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toastWirteFileError.present();
              }
          )
        }
    ).catch(
        ()=>{
          let toastFileError = this.toastCtrl.create({
            message: 'File Erstellung ist Fehlgeschlagen',
            showCloseButton: true,
            closeButtonText: 'Ok'
          });
          toastFileError.present();
        }
    )

  }
}
