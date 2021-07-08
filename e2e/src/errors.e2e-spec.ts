import { Helper } from './models/helper';

describe('Bracket Page Errors', function() {
  let helper = new Helper();

  it('Message should show message that all matches must be completed', function() {
    helper.loadHome();
    helper.idClick('registrationLink');
    helper.idSendKeys('contestant0', 'Alyssa');
    helper.idSendKeys('contestant1', 'Chad');
    helper.idClick('registerContestantsButton');
    helper.idClick('bracketsLink');
    helper.idClick('completeRoundButton');
    helper.idExpectToEqual('bracketsMessage', 'Please complete all matches');
    });

  });

  describe('Registration Page Errors', function() {
  let helper = new Helper();
    it('Message should appear if registration is not of length 2, 4, or 8', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Alyssa');

      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Should be 2, 4, or 8 contestants');
    });

    it('Message should appear when input is duplicate', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Alyssa');
      helper.idSendKeys('contestant1', 'Alyssa');

      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Duplicate player');
    });
});
