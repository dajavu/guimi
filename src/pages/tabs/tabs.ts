import { Component } from '@angular/core';

import { TopPage } from '../top/top';
import { FindPage } from '../find/find';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TopPage;
  tab3Root = FindPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
