
describe('Welsome Page Navigation', function() {

 it('', function() {
 browser.get('/');
 element(by.model('yourName')).sendKeys('GURU99');
  var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(guru.getText()).toEqual('Hello GURU99!');
  });
});
