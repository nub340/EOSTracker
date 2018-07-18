import { $, browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

export class AppNavPage {

  //side-menu
  sideMenu: ElementFinder;
  searchQueryInput: ElementFinder;
  searchButton: ElementFinder;
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
    this.searchButton = this.sideMenu.$('input[name="query"]');
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

  isSearchQueryInputDisplayed() {
    return this.searchQueryInput.isDisplayed();
  }

  setSearchQueryInput(value: string) {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.searchQueryInput.sendKeys(value));
  }

  clickSearchButton() {
    return this.waitToBeClickable(this.searchButton)
      .then(() => this.searchButton.click());
  }

  isDashboardLinkDisplayed() {
    return this.dashboardLink.isDisplayed();
  }

  clickDashboardLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.dashboardLink.click());
  }

  isBlocksLinkDisplayed() {
    return this.blocksLink.isDisplayed();
  }

  clickBlocksLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.blocksLink.click());
  }

  isTransactionsLinkDisplayed() {
    return this.transactionsLink.isDisplayed();
  }

  clickTransactionsLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.transactionsLink.click());
  }

  isAccountsLinkDisplayed() {
    return this.accountsLink.isDisplayed();
  }

  clickAccountsLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.accountsLink.click());
  }

  isProducersLinkDisplayed() {
    return this.producersLink.isDisplayed();
  }

  clickProducersLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.producersLink.click());
  }

  isActionsLinkDisplayed() {
    return this.actionsLink.isDisplayed();
  }

  clickActionsLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.actionsLink.click());
  }

  isSettingsLinkDisplayed() {
    return this.settingsLink.isDisplayed();
  }

  clickSettingsLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.settingsLink.click());
  }

  isSupportLinkDisplayed() {
    return this.supportLink.isDisplayed();
  }

  clickSupportLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.supportLink.click());
  }

  isWalletLinkDisplayed() {
    return this.walletLink.isDisplayed();
  }

  clickWalletLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.walletLink.click());
  }

  isVotingLinkDisplayed() {
    return this.votingLink.isDisplayed();
  }

  clickVotingLink() {
    return this.waitToBeClickable(this.searchQueryInput)
      .then(() => this.votingLink.click());
  }

  // Private
  private waitToBeClickable(elem: ElementFinder) {
    return browser.wait(ExpectedConditions.elementToBeClickable(elem));
  }
}
