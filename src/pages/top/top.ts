import { Component , ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { GoodsService } from '../../service/goods.service';
import { GlobalData } from '../../global/globalData';

@Component({
  selector: 'page-top',
  templateUrl: 'top.html'
})
export class TopPage {
  @ViewChild(Content) content: Content;
  
  //商品列表入参
  private goodsParam = {
    PageIndex: 0, //页码（从0开始）
    PageSize: 10, //每页条数（默认10条）
    Name: null, //商品名称
    Category: '1', //商品分类ID
    Column: null, //商品栏目ID
    Orderby: '0', //排序方式
  }

  //商品分页信息
  private commodityPage:any = null;

  //商品列表
  private commodityList:any = [];

  //商品分类List
  private categoryList:any = [];

  constructor(public navCtrl: NavController,public goodsService:GoodsService,public globalData:GlobalData) {
    //获取商品列表
    this.getGoods();

    //获取码表数据
    this.globalData.getStorageCode().then((res:any)=>{
      res.forEach(item => {
        if(item.Value === 'Category'){
          this.categoryList = item.Items;
          console.log(this.categoryList)
        }
      });
    });
  }

  //获取商品列表
  getGoods(){
    this.goodsService.getGoods(this.goodsParam).then((res:any)=>{
      this.commodityList = this.commodityList.concat(res.Items); 
      this.commodityPage = res;
    });
  }

  //改变商品类别
  changeCategory(){
    this.goodsParam.PageIndex = 0;
    this.getGoods();
  }

  //加载更多商品
  moreCommodity(infiniteScroll){
    //页码加一
    this.goodsParam.PageIndex = parseInt(this.commodityPage.PageIndex) + 1;
    this.getGoods();
    infiniteScroll.complete();
  }

  //切换状态
  changeStatus(status){
    //状态切换
    this.goodsParam.Orderby = status;
    //返回顶部
    this.content.scrollToTop();
    //清空返回结果
    this.commodityPage = null;
    this.commodityList = [];
    //初始化当前页数
    this.goodsParam.PageIndex = 0;
    //调用获取商品
    this.getGoods();
  }

  //搜索
  goSearch(){
    this.navCtrl.push(SearchPage);
  }

}
