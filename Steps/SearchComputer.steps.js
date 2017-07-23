const data = require('../json/testdata.json'),
    homepage = require('../PageObjects/HomePage.pageObject'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;

chai.use(chaiAsPromised);

module.exports = function () {

    this.When(/^I type comptuer's name in a search field and press search button$/, function (callback) {
        homepage.SearchComputerByName(data.ComputerNameToAdd).then(function () {
            callback();
        });
    });

    this.Then(/^If computer with typed name exists, it should be displayed$/, function (callback) {
        expect(homepage.computerFound(data.ComputerNameToAdd).isDisplayed()).to.eventually.equal(true)
                                                                                .and.notify(callback);
    });

};