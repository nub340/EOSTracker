import { AppPage } from '../po/app.po';
import { browser } from 'protractor';
import { AppNavPage } from '../po/app.nav';
import { environment } from '../../src/environments/environment';

describe('EOS Explorer > Side Nav', () => {

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

  describe('Dashboard Link', () => {

    it('should be displayed', () => {    
      expect(nav.isDashboardLinkDisplayed()).toBeTruthy();
    });

    it('should load Dashboard when clicked', () => {
      nav.clickDashboardLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/');
    });

  });

  describe('Blocks Link', () => {

    it('should be displayed', () => {    
      expect(nav.isBlocksLinkDisplayed()).toBeTruthy();
    });

    it('should load Blocks when clicked', () => {
      nav.clickBlocksLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/blocks');
    });

  });

  describe('Transactions Link', () => {

    it('should be displayed', () => {    
      expect(nav.isTransactionsLinkDisplayed()).toBeTruthy();
    });

    it('should load Transactions when clicked', () => {
      nav.clickTransactionsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/transactions');
    });

  });

  describe('Accounts Link', () => {

    it('should be displayed', () => {    
      expect(nav.isAccountsLinkDisplayed()).toBeTruthy();
    });

    it('should load Accounts when clicked', () => {
      nav.clickAccountsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/accounts');
    });

  });

  describe('Producers Link', () => {

    it('should be displayed', () => {    
      expect(nav.isProducersLinkDisplayed()).toBeTruthy();
    });

    it('should load Producers when clicked', () => {
      nav.clickProducersLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/producers');
    });

  });

  describe('Actions Link', () => {

    it('should be displayed', () => {    
      expect(nav.isActionsLinkDisplayed()).toBeTruthy();
    });

    it('should load Actions when clicked', () => {
      nav.clickActionsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/actions');
    });

  });

  describe('Settings Link', () => {

    it('should be displayed', () => {    
      expect(nav.isSettingsLinkDisplayed()).toBeTruthy();
    });

    it('should load Settings when clicked', () => {
      nav.clickSettingsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/settings');
    });

  });

  describe('Support Link', () => {

    it('should be displayed', () => {    
      expect(nav.isSupportLinkDisplayed()).toBeTruthy();
    });

    it('should load Support when clicked', () => {
      nav.clickSupportLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/support');
    });

  });

  describe('Wallet Link', () => {

    it('should be displayed', () => {    
      expect(nav.isWalletLinkDisplayed()).toBeTruthy();
    });

    it('should open EOS Wallet in new window when clicked', () => {
      nav.clickWalletLink();
      browser.getAllWindowHandles()
        .then(handles => {          
          return browser.switchTo().window(handles[1])
            .then(() => browser.getCurrentUrl())
            .then(url => {
              expect(url).toContain(environment.walletUrl)
            })
            .then(() => browser.close())            
            .then(() => browser.driver.switchTo().window(handles[0]));
        });      
    });
  });

  describe('Voting Link', () => {

    it('should be displayed', () => {    
      expect(nav.isVotingLinkDisplayed()).toBeTruthy();
    });

    it('should load Voting when clicked', () => {
      nav.clickVotingLink();
      browser.getAllWindowHandles()
        .then(handles => {          
          return browser.switchTo().window(handles[1])
            .then(() => browser.getCurrentUrl())
            .then(url => {              
              expect(url).toContain(environment.votingUrl)
            })
            .then(() => browser.close())            
            .then(() => browser.driver.switchTo().window(handles[0]));
        }); 
    });

  });
});
