import { AppPage } from '../po/app.po';
import { browser } from 'protractor';
import { AppNavPage } from '../po/app.nav';

describe('eos-explorer App Nav', () => {

  let page: AppPage = new AppPage();
  let nav: AppNavPage = new AppNavPage();

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
  })

  beforeEach(() => {
    this.nav = new AppNavPage();
  });

  it('should display nav brand', () => {    
    expect(page.getHeadingText()).toEqual('EOS Tracker');
  });

  it('should display search query input', () => {    
    expect(nav.isSearchQueryInputDisplayed()).toBeTruthy();
  });

  it('should display Dashboard link', () => {    
    expect(nav.isDashboardLinkDisplayed()).toBeTruthy();
  });

  it('should load Dashboard when clicked', () => {
    nav.clickDashboardLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/');
  });

  it('should display Blocks link', () => {    
    expect(nav.isBlocksLinkDisplayed()).toBeTruthy();
  });

  it('should load Blocks when clicked', () => {
    nav.clickBlocksLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/blocks');
  });

  it('should display Transactions link', () => {    
    expect(nav.isTransactionsLinkDisplayed()).toBeTruthy();
  });

  it('should load Transactions when clicked', () => {
    nav.clickTransactionsLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/transactions');
  });

  it('should display Accounts link', () => {    
    expect(nav.isAccountsLinkDisplayed()).toBeTruthy();
  });

  it('should load Accounts when clicked', () => {
    nav.clickAccountsLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/accounts');
  });

  it('should display Producers link', () => {    
    expect(nav.isProducersLinkDisplayed()).toBeTruthy();
  });

  it('should load Producers when clicked', () => {
    nav.clickProducersLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/producers');
  });

  it('should display Actions link', () => {    
    expect(nav.isActionsLinkDisplayed()).toBeTruthy();
  });

  it('should load Actions when clicked', () => {
    nav.clickActionsLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/actions');
  });

  it('should display Settings link', () => {    
    expect(nav.isSettingsLinkDisplayed()).toBeTruthy();
  });

  it('should load Settings when clicked', () => {
    nav.clickSettingsLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/settings');
  });

  it('should display Support link', () => {    
    expect(nav.isSupportLinkDisplayed()).toBeTruthy();
  });

  it('should load Support when clicked', () => {
    nav.clickSupportLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/support');
  });

  it('should display Wallet link', () => {    
    expect(nav.isWalletLinkDisplayed()).toBeTruthy();
  });

  xit('should load Wallet when clicked', () => {
    nav.clickWalletLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/wallet');
  });

  it('should display Voting link', () => {    
    expect(nav.isVotingLinkDisplayed()).toBeTruthy();
  });

  xit('should load Voting when clicked', () => {
    nav.clickVotingLink();
    expect(browser.getCurrentUrl()).toBeTruthy('/voting');
  });

});
