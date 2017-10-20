import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class GoodsService{

    constructor(public http:Http,public loadingCtrl: LoadingController) {
    }

    //获取商品数据
    getGoods(param){
      console.log('请求参数:',param)
      let loading = this.loadingCtrl.create({content: '加载中...'});
      loading.present();
      return new Promise((resolve,reject)=>{
        //商品列表
        this.http.post('http://api.gmdp.xin/api/Goods/GetGoodsList',param).subscribe((res) => {
          console.log('返回结果:',JSON.parse(res['_body']));
          loading.dismiss();
          resolve(JSON.parse(res['_body']));
        });
      })
    }

    //获取-码表
    getHttpCode(){
      return new Promise((resolve,reject)=>{
        //获取-码表
        this.http.post('http://api.gmdp.xin/api/Goods/GetCategory',null).subscribe((res) => {
          resolve(JSON.parse(res['_body']))
        });
      })
    }

    //验证激活码
    activeCode(param){
      return new Promise((resolve,reject)=>{
        this.http.post('http://api.gmdp.xin/api/ActiveCode/Verify',param).subscribe((res) => {
          console.log(JSON.parse(res['_body']))
        });
      })
    }
}