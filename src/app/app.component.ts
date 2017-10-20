import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {Http} from '@angular/http';
import { Storage } from '@ionic/storage';
import { GlobalData } from '../global/globalData';
import { GoodsService } from '../service/goods.service';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public http: Http,public storage:Storage,public globalData:GlobalData,public goodsService:GoodsService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initializeApp();
    });
  }

  //初始化app
  async initializeApp(){
    let httpCode = await this.goodsService.getHttpCode();
    let storageCode = await this.globalData.getStorageCode();
    console.log('httpCode',httpCode)
    //判断本地码表是否存在
    if(storageCode){
      //判断内容是否相同
      if(JSON.stringify(httpCode) != JSON.stringify(storageCode)){
        console.log('码表值重新设置');
        this.storage.set('codeData', JSON.stringify(httpCode));
      }
    }else{
      console.log('码表值重新设置');
      this.storage.set('codeData', JSON.stringify(httpCode));
    }
  }

}
