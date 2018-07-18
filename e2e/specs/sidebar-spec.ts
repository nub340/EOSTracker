import { AppPage } from '../po/app.po';
import { browser } from 'protractor';
import { SidebarComponent } from '../po/sidebar.po';
import { environment } from '../../src/environments/environment';

describe('EOS Explorer > Side Nav', () => {

  let page = new AppPage();
  let sidebar: SidebarComponent;

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.manage().window().setSize(browser.params.breakpoints.normal.width, browser.params.breakpoints.normal.height);      
    page.navigateTo();
  })

  beforeEach(() => {
    sidebar = new SidebarComponent();
  });

  it('should display nav brand', () => {    
    expect(page.getHeadingText()).toEqual('EOS Tracker');
  });

  it('should display search query input', () => {    
    expect(sidebar.isSearchQueryInputDisplayed()).toBeTruthy();
  });

  describe('Dashboard Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isDashboardLinkDisplayed()).toBeTruthy();
    });

    it('should load Dashboard when clicked', () => {
      sidebar.clickDashboardLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/');
    });

  });

  describe('Blocks Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isBlocksLinkDisplayed()).toBeTruthy();
    });

    it('should load Blocks when clicked', () => {
      sidebar.clickBlocksLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/blocks');
    });

  });

  describe('Transactions Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isTransactionsLinkDisplayed()).toBeTruthy();
    });

    it('should load Transactions when clicked', () => {
      sidebar.clickTransactionsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/transactions');
    });

  });

  describe('Accounts Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isAccountsLinkDisplayed()).toBeTruthy();
    });

    it('should load Accounts when clicked', () => {
      sidebar.clickAccountsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/accounts');
    });

  });

  describe('Producers Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isProducersLinkDisplayed()).toBeTruthy();
    });

    it('should load Producers when clicked', () => {
      sidebar.clickProducersLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/producers');
    });

  });

  describe('Actions Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isActionsLinkDisplayed()).toBeTruthy();
    });

    it('should load Actions when clicked', () => {
      sidebar.clickActionsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/actions');
    });

  });

  describe('Settings Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isSettingsLinkDisplayed()).toBeTruthy();
    });

    it('should load Settings when clicked', () => {
      sidebar.clickSettingsLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/settings');
    });

  });

  describe('Support Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isSupportLinkDisplayed()).toBeTruthy();
    });

    it('should load Support when clicked', () => {
      sidebar.clickSupportLink();
      expect(browser.getCurrentUrl()).toBeTruthy('/support');
    });

  });

  describe('Wallet Link', () => {

    it('should be displayed', () => {    
      expect(sidebar.isWalletLinkDisplayed()).toBeTruthy();
    });

    it('should open EOS Wallet in new window when clicked', () => {
      sidebar.clickWalletLink();
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
      expect(sidebar.isVotingLinkDisplayed()).toBeTruthy();
    });

    it('should load Voting when clicked', () => {
      sidebar.clickVotingLink();
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

  describe('Viewport set to mobile width', () => {

    let isDisplayed: boolean;

    beforeAll(() => {
      sidebar.isDisplayed().then(displayed => isDisplayed = displayed)
      browser.manage().window().setSize(browser.params.breakpoints.mobile.width, browser.params.breakpoints.mobile.height); 
      sidebar = new SidebarComponent();     
    })

    it('should hide sidebar', () => {
      browser.wait(() => sidebar.isDisplayed().then(displayed => isDisplayed !== displayed))
        .then(() => {
          expect(sidebar.isDisplayed()).toBeFalsy();
        })      
    });

  })

});
