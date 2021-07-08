import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('Routing testing', function() {

  it('Should navigate to welcome page and return brackets app text', function() {
    browser.get('/');
    let pageTitle = element(by.id('subpageTitle')).getText();
    expect(pageTitle).toEqual('Brackets App');

  });

  

});
