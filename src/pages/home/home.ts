import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { TopPage } from '../top/top';
import {Http} from '@angular/http';
import { GoodsService } from '../../service/goods.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  private commodityRes:any = null;

  constructor(public navCtrl: NavController,public http: Http,public goodsService:GoodsService) {

    //商品列表入参
    let goodsParam = {
      'PageIndex':0, //页码（从0开始）
      'PageSize':10, //每页条数（默认10条）
      'Name':null, //商品名称
      'Category':null, //商品分类ID
      'Column':null, //商品栏目ID
    }

    //获取商品列表
    this.goodsService.getGoods(goodsParam).then((res)=>{
      this.commodityRes = res;
    });

    //校验验证码
    this.goodsService.activeCode({ActiveCode:'123456'}).then((val)=>{
      console.log(val)
    })
  }
  
  goSearch(){
    this.navCtrl.push(SearchPage);
  }

  goTop(){
    this.navCtrl.push(TopPage);
  }
}
