import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

declare var Baichuan: any;

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  private user:any = {};

  constructor(public navCtrl: NavController) {
    this.judgeLogin();
  }

  //判断是否登陆，如果没有登陆，登陆
  async judgeLogin(){
    let self = this;
    await this.getLoginMassage().then(res => self.user = res);
    if(!self.user.login){
      await this.login().then(res => self.user = res)
    }
    console.log(self.user)
  }

  //登陆
  login(){
    let primise = new Promise((resolve,reject)=>{
      Baichuan.auth('login', function(res){
        console.log(res)
        resolve(res);
      },function(e){
        console.log(e)
        reject(e);
      });
    })
    return primise;
  }

  //登出
  logout(){
    Baichuan.auth('logout', function(res){
      this.user = null
      console.log(res)
    },function(e){
      console.log(e)
    });
  }

  //获取登陆信息
  getLoginMassage(){
    let primise = new Promise((resolve,reject)=>{
      Baichuan.auth('getSession', function(res){
        console.log(res)
        resolve(res)
      },function(e){
        console.log(e)
        reject(e)
      });
    })
    return primise;
  }
 
}
