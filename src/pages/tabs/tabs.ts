import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { VotarPage } from '../votar/votar';
import { MesaPage } from '../mesa/mesa';
import { ResultadoPage } from '../resultado/resultado';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tabVotar = VotarPage;
  tabMesa = MesaPage;
  tabResultado = ResultadoPage;

  constructor() {

  }
}
