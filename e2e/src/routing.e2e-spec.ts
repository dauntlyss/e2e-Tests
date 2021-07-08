import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';
import { Helper } from './models/helper';

describe('Routing testing', function() {
   let helper = new Helper();

  it('Should navigate to welcome page and return brackets app text', function() {
      helper.loadHome();
      helper.idExpectToEqual('subpageTitle', 'Brackets App');
    });

  it('Should navigate to registration page', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idExpectToEqual('subpageTitle', 'Register Players');
  });

  it('Should navigate to brackets page', function() {
    helper.loadHome();
    helper.idClick('bracketsLink');
    helper.idExpectToEqual('subpageTitle', 'Brackets');
  });

  it('Should navigate from any different page back to the welcome page', function() {
    helper.loadHome();
    helper.idClick('registrationLink');
    helper.idExpectToEqual('subpageTitle', 'Register Players');

    helper.idClick('bracketsLink');
    helper.idExpectToEqual('subpageTitle', 'Brackets');

    helper.idClick('welcomeLink');
    helper.idExpectToEqual('subpageTitle', 'Brackets App');
  });

});
