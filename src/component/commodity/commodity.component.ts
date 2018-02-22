import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

declare var Baichuan: any;

@Component({
  selector: 'commodity',
  templateUrl: 'commodity.component.html'
})
export class CommodityComponent {
  @Input() commodityList;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    let sel = this;
    setTimeout(function() {
      console.log(sel.commodityList)   
    }, 2000);
  }

  //展示详情
   async showDetail(itemId){
    let pageArgs = {
      type: 'itemDetailPage',
      itemId: itemId,
      shopId: '',
      allOrder: true,
      url: '',
      status: 0-4,    // 所要展示订单的订单状态
    }
    
    let tempList = {
      taokeArgs:{
        pid: '',
        adzoneid: '',
        subPid: '',
        unionId: '',
        key: ''
      },
      showArgs: {
        openType: 'Auto', // 打开页面的方式
        backUrl: '',                // 指定手淘回跳的地址
        nativeFailMode: 'NONE',  // 跳手淘/天猫失败后的处理策略
        // Android
        clientType: '',
        pageClose: true,
        proxyWebview: true,
        showTitleBar: true,
        title: '',
       // IOS
        linkKey: '',    // applink使用，优先拉起的linkKey，手淘：@"taobao_scheme"
      },
      exArgs:{}
    }
    
    // let loading = this.loadingCtrl.create({content: '加载中...'});
    // loading.present();
    Baichuan.showPage(pageArgs, tempList, function(res){
      // loading.dismiss();
      console.log(res)
      alert(JSON.stringify(res))
    }, function(e){
      // loading.dismiss();
      console.log(e)
      alert(JSON.stringify(e))
    });
  }

}
