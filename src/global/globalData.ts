import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';
import {Http} from '@angular/http';

@Injectable()
export class GlobalData{

    constructor(public storage:Storage,public http:Http) {}

    //获取本地storage
    getStorageCode(){
      return new Promise((resolve,reject)=>{
        //获取码表
        this.storage.get('codeData').then((val) => {
          resolve(val ? JSON.parse(val) : val)
        });
      })
    } 
}