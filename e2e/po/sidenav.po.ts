import { $, browser, by, ElementFinder, ExpectedConditions } from 'protractor';

export class SidenavComponent {

  sideNav: ElementFinder;
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
    this.sideNav = $('mat-sidenav');
    this.searchQueryInput = this.sideNav.$('input[name="query"]');
    this.searchButton = this.sideNav.$('input[name="query"]');
    this.dashboardLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Dashboard")]'));
    this.blocksLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Blocks")]'));
    this.transactionsLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Transactions")]'));
    this.accountsLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Accounts")]'));
    this.producersLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Producers")]'));
    this.actionsLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Actions")]'));
    this.settingsLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Settings")]'));
    this.supportLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Support")]'));
    this.walletLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Wallet")]'));
    this.votingLink = this.sideNav.element(by.xpath('.//a[contains(normalize-space(.),"Voting")]'));
  }

  isDisplayed() {
    return this.sideNav.isDisplayed();
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
    return this.waitToBeClickable(this.dashboardLink)
      .then(() => this.dashboardLink.click());
  }

  isBlocksLinkDisplayed() {
    return this.blocksLink.isDisplayed();
  }

  clickBlocksLink() {
    return this.waitToBeClickable(this.blocksLink)
      .then(() => this.blocksLink.click());
  }

  isTransactionsLinkDisplayed() {
    return this.transactionsLink.isDisplayed();
  }

  clickTransactionsLink() {
    return this.waitToBeClickable(this.transactionsLink)
      .then(() => this.transactionsLink.click());
  }

  isAccountsLinkDisplayed() {
    return this.accountsLink.isDisplayed();
  }

  clickAccountsLink() {
    return this.waitToBeClickable(this.accountsLink)
      .then(() => this.accountsLink.click());
  }

  isProducersLinkDisplayed() {
    return this.producersLink.isDisplayed();
  }

  clickProducersLink() {
    return this.waitToBeClickable(this.producersLink)
      .then(() => this.producersLink.click());
  }

  isActionsLinkDisplayed() {
    return this.actionsLink.isDisplayed();
  }

  clickActionsLink() {
    return this.waitToBeClickable(this.actionsLink)
      .then(() => this.actionsLink.click());
  }

  isSettingsLinkDisplayed() {
    return this.settingsLink.isDisplayed();
  }

  clickSettingsLink() {
    return this.waitToBeClickable(this.settingsLink)
      .then(() => this.settingsLink.click());
  }

  isSupportLinkDisplayed() {
    return this.supportLink.isDisplayed();
  }

  clickSupportLink() {
    return this.waitToBeClickable(this.supportLink)
      .then(() => this.supportLink.click());
  }

  isWalletLinkDisplayed() {
    return this.walletLink.isDisplayed();
  }

  clickWalletLink() {
    return this.waitToBeClickable(this.walletLink)
      .then(() => this.walletLink.click());
  }

  isVotingLinkDisplayed() {
    return this.votingLink.isDisplayed();
  }

  clickVotingLink() {
    return this.waitToBeClickable(this.votingLink)
      .then(() => this.votingLink.click());
  }

  // Private
  private waitToBeClickable(elem: ElementFinder) {
    return browser.wait(ExpectedConditions.elementToBeClickable(elem));
  }
}
