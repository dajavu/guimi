import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
export class FindPage {
  //文章列表
  private assayList = ['1','2','3','4','5','6']

  //默认文章类型
  private status = '0';

  constructor(public navCtrl: NavController) {
  }

}
