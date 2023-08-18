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

  changeSelectedColor(lang: string): string {
    return lang === this.lang ? 'nav__lang--selected' : 'nav__lang'
  }

}
