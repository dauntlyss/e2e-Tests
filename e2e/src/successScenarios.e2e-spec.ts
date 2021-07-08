import { Helper } from './models/helper';

describe('Successful Scenario Tests', function() {
    let helper = new Helper();

  describe('Input values and registerContestants()', function() {
    it('Should update players array on registration page', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Alyssa');
      helper.idSendKeys('contestant1', 'Chad');
      helper.idValueExpectToEqual('contestant0', 'Alyssa');
      helper.idValueExpectToEqual('contestant1', 'Chad');
    });

    it('Should register all contestants successfully', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idSendKeys('contestant0', 'Alyssa');
      helper.idSendKeys('contestant1', 'Chad');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Alyssa,Chad');
    });

  });

  describe('Autofill Tests', function() {
    it('Should successfully autofill two players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillTwoButton');
      helper.idValueExpectToEqual('contestant0', 'Zoe');
      helper.idValueExpectToEqual('contestant1', 'Kaylee');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Zoe,Kaylee');
    });

    it('Should successfully autofill four players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillFourButton');
      helper.idValueExpectToEqual('contestant0', 'John');
      helper.idValueExpectToEqual('contestant1', 'Paul');
      helper.idValueExpectToEqual('contestant2', 'George');
      helper.idValueExpectToEqual('contestant3', 'Ringo');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'John,Paul,George,Ringo');
    });

    it('should successfully autofill eight players', function() {
      helper.loadHome();
      helper.idClick('registrationLink');
      helper.idClick('autofillEightButton');
      helper.idValueExpectToEqual('contestant0', 'Leia');
      helper.idValueExpectToEqual('contestant1', 'Luke');
      helper.idValueExpectToEqual('contestant2', 'Lando');
      helper.idValueExpectToEqual('contestant3', 'Han');
      helper.idValueExpectToEqual('contestant4', 'Chewy');
      helper.idValueExpectToEqual('contestant5', 'R2D2');
      helper.idValueExpectToEqual('contestant6', 'C3P0');
      helper.idValueExpectToEqual('contestant7', 'Vader');
      helper.idClick('registerContestantsButton');
      helper.idExpectToEqual('registrationMessage', 'Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
    });
  });


});
