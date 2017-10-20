import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'essay',
  templateUrl: 'essay.component.html'
})
export class EssayComponent {
  @Input() essayList;

  constructor(public navCtrl: NavController) {
  }

}
