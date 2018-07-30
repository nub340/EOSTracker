import { browser, by, element, ElementFinder, $ } from 'protractor';

export class AppPage {

  navbarBrand: ElementFinder
  hamburgerMenu: ElementFinder

  constructor() {
    this.navbarBrand = $('a.brand');
    this.hamburgerMenu = $('.navbar-header button.navbar-toggle');
  }

  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return this.navbarBrand.getText();
  }

  isHamburgerMenuDisplayed() {
    return this.hamburgerMenu.isDisplayed();
  }
}
