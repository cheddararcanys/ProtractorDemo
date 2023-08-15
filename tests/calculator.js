//let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');

        element(by.css('[ng-click="doAddition()"]')).click();
        
        let result = element(by.cssContainingText('.ng-binding', '5'));
        expect(result.getText()).toEqual('5');
        
        /*browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('7');*/

        browser.sleep(5000);

    }) 

    it('subtraction test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('firstt')).sendKeys('2');
        element(by.model('second')).sendKeys('3');

        element(by.css('[ng-click="doAddition()"]')).click();
        
        let result = element(by.cssContainingText('.ng-binding', '5'));
        expect(result.getText()).toEqual('5');
        
        /*browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('7');*/

        browser.sleep(5000);
        

    }) 
});