import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  lang: string = "es";

  constructor(){}

  changeLang(lang: string) {
    this.lang = lang;
  }

}
