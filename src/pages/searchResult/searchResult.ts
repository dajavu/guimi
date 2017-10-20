import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { GoodsService } from '../../service/goods.service';

@Component({
  selector: 'page-searchResult',
  templateUrl: 'searchResult.html',
})
export class SearchResultPage {

  private searchValue = null;

  //商品分页信息
  private commodityPage:any = null;
  
  //商品列表
  private commodityList:any = [];

  //商品列表入参
  private goodsParam = {
    PageIndex: 0, //页码（从0开始）
    PageSize: 5, //每页条数（默认10条）
    Name: null, //商品名称
    Category: null, //商品分类ID
    Column: null, //商品栏目ID
    Orderby: null, //排序方式
  }

  constructor(public navCtrl: NavController,public navParams:NavParams,public goodsService:GoodsService) {
    //获取传递过来的商品名字
    this.goodsParam.Name = this.navParams.get('value');

    //获取商品列表
    this.getGoods();
  }

  //获取商品列表
  getGoods(){
    this.goodsService.getGoods(this.goodsParam).then((res:any)=>{
      this.commodityList = this.commodityList.concat(res.Items); 
      this.commodityPage = res;
    });
  }

  //加载更多商品
  moreCommodity(infiniteScroll){
    //页码加一
    this.goodsParam.PageIndex = parseInt(this.commodityPage.PageIndex) + 1;
    this.getGoods();
    infiniteScroll.complete();
  }
  
  //搜索
  search(value){
    //初始化入参
    this.goodsParam.PageIndex = 0;
    //清空返回结果
    this.commodityPage = null;
    this.commodityList = [];
    //调用获取商品
    this.getGoods();
  }
}
