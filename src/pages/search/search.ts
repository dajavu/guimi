import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultPage } from '../searchResult/searchResult';

@Component({
  selector: 'page-search', 
  templateUrl: 'search.html',
})
export class SearchPage {

  private flagList:any = ['连衣裙','小白鞋','T恤','卫衣','口红','手机','风衣','外套','iPhone8','西装','连衣裙','洗发水','防晒霜','衬衫','面膜']

  private searchValue = '';

  constructor(public navCtrl: NavController) {
    
  }

  search(value){
    this.navCtrl.push(SearchResultPage,{'value':value});
  }
}
