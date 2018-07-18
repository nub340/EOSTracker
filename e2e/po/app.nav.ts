import { $, browser, by, element, ElementFinder } from 'protractor';

export class AppNavPage {

  //side-menu
  sideMenu: ElementFinder;
  searchQueryInput: ElementFinder;
  dashboardLink: ElementFinder;
  blocksLink: ElementFinder;
  transactionsLink: ElementFinder;
  actionsLink: ElementFinder;
  accountsLink: ElementFinder;
  producersLink: ElementFinder;
  settingsLink: ElementFinder;
  supportLink: ElementFinder;
  walletLink: ElementFinder;
  votingLink: ElementFinder;  
  
  constructor() {
    this.sideMenu = $('ul#side-menu');
    this.searchQueryInput = this.sideMenu.$('input[name="query"]');
    this.dashboardLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Dashboard"]'));
    this.blocksLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Blocks"]'));
    this.transactionsLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Transactions"]'));
    this.accountsLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Accounts"]'));
    this.producersLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Producers"]'));
    this.actionsLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Actions"]'));
    this.settingsLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Settings"]'));
    this.supportLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Support"]'));
    this.walletLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Wallet"]'));
    this.votingLink = this.sideMenu.element(by.xpath('.//li//a[normalize-space(.)="Voting"]'));
  }

  isSideMenuDisplayed() {
    return this.sideMenu.isDisplayed();
  }

  isSearchQueryInputDisplayed(){
    return this.searchQueryInput.isDisplayed();
  }

  isDashboardLinkDisplayed() {
    return this.dashboardLink.isDisplayed();
  }

  clickDashboardLink() {
    return this.dashboardLink.click();
  }

  isBlocksLinkDisplayed() {
    return this.blocksLink.isDisplayed();
  }

  clickBlocksLink() {
    return this.blocksLink.click();
  }

  isTransactionsLinkDisplayed() {
    return this.transactionsLink.isDisplayed();
  }

  clickTransactionsLink() {
    return this.transactionsLink.click();
  }

  isAccountsLinkDisplayed() {
    return this.accountsLink.isDisplayed();
  }

  clickAccountsLink() {
    return this.accountsLink.click();
  }

  isProducersLinkDisplayed() {
    return this.producersLink.isDisplayed();
  }

  clickProducersLink() {
    return this.producersLink.click();
  }

  isActionsLinkDisplayed() {
    return this.actionsLink.isDisplayed();
  }

  clickActionsLink() {
    return this.actionsLink.click();
  }

  isSettingsLinkDisplayed() {
    return this.settingsLink.isDisplayed();
  }

  clickSettingsLink() {
    return this.settingsLink.click();
  }

  isSupportLinkDisplayed() {
    return this.supportLink.isDisplayed();
  }

  clickSupportLink() {
    return this.supportLink.click();
  }

  isWalletLinkDisplayed() {
    return this.walletLink.isDisplayed();
  }

  clickWalletLink() {
    return this.walletLink.click();
  }

  isVotingLinkDisplayed() {
    return this.votingLink.isDisplayed();
  }

  clickVotingLink() {
    return this.votingLink.click();
  }
}
