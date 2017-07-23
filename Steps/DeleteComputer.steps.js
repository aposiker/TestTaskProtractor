const data = require('../json/testdata.json'),
    objects = require('../json/objects.json'),
    homepage = require('../PageObjects/HomePage.pageObject'),
    updateComputer = require('../PageObjects/UpdateComputer.pageObject'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function () {

    this.When(/^I type comptuer's name to delete in a search field and press search button$/, function (callback) {
        homepage.SearchComputerByName(data.ComputerNewNameForUpdate).then(function () {
            callback();
        });
    });

    this.When(/^Click on found computer to delete$/, function (callback) {
        homepage.ClickOnComputer(data.ComputerNewNameForUpdate).then(function () {
            callback();
        });
    });

    this.When(/^I press Delete This Computer button$/, function (callback) {
        updateComputer.deleteComputer().then(function () {
            callback();
        });
    });

    this.Then(/^I got redirected to home page and see alert message about computer delete$/, function (callback) {
        expect(homepage.AlertMessageText()).to.eventually.equal('Done! Computer has been deleted').and.notify(callback);
    });

};