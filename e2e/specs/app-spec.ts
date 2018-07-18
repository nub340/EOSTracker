import { AppPage } from '../po/app.po';
import { browser } from 'protractor';

describe('eos-explorer App', () => {
  let page: AppPage;

  beforeAll(() => {
    //browser.ignoreSynchronization = false;
  })

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display nav brand', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('EOS Tracker');
  });
});
