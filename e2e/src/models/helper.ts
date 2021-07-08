import { browser, element, by } from 'protractor';
import { Helper } from './models/helper';

export class Helper {

  constructor() {}

    /**
    This method loads the home page
    */
    export function loadHomePage() {
      browser.get('/');
    }

    /**
    This method clicks the button with the specified id
    */
    idClick(id: string) {
      element(by.id(id)).click();
    }

    /**
    This method checks that the specified id's text is
    equal to the expected result
    */
    export function idExpectedToEqual(id: string, expectation: string) {
      let actual = element(by.id(id)).getText();
      expect(actual).toEqual(expectation);
    }

}
