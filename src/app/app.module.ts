import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//引入对应Module
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

//页面
import { TopPage } from '../pages/top/top';
import { FindPage } from '../pages/find/find';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { SearchResultPage } from '../pages/searchResult/searchResult';

//控件
import { CommodityComponent } from '../component/commodity/commodity.component';
import { EssayComponent } from '../component/essay/essay.component';

//providers
import { GlobalData } from '../global/globalData';
import { GoodsService } from '../service/goods.service';


@NgModule({
  declarations: [
    MyApp,
    TopPage,
    FindPage,
    HomePage,
    TabsPage,
    AccountPage,
    LoginPage,
    CommodityComponent,
    EssayComponent,
    SearchPage,
    SearchResultPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TopPage,
    FindPage,
    HomePage,
    TabsPage,
    AccountPage,
    LoginPage,
    SearchPage,
    SearchResultPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalData,
    GoodsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
