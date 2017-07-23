const data = require('../json/testdata.json'),
    objects = require('../json/objects.json'),
    homepage = require('../PageObjects/HomePage.pageObject'),
    addComputer = require('../PageObjects/AddComputer.pageObject'),
    updateComputer = require('../PageObjects/UpdateComputer.pageObject'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function () {

    this.When(/^I type comptuer's name to update in a search field and press search button$/, function (callback) {
        homepage.SearchComputerByName(data.ComputerNameToUpdate).then(function () {
            callback();
        });
    });

    this.When(/^Click on found computer to update$/, function (callback) {
        homepage.ClickOnComputer(data.ComputerNameToUpdate).then(function () {
            callback();
        });

    });

    this.Then(/^I should be redirected to computer's page$/, function (callback) {
        expect(addComputer.PageHeader.getText()).to.eventually.equal('Edit computer').and.notify(callback);
    });

    this.When(/^I update compute's info$/, function (callback) {
        updateComputer.updateComputerInfo(data.ComputerNewNameForUpdate, data.ComputerStartDateToUpdate,
                                                data.ComputerEndDateToUpdate, data.ComputerCompanyToUpdate);
        callback();
    });

    this.When(/^Press Save This Computer button$/, function (callback) {
        updateComputer.pressSaveComputerBtn().then(function () {
            callback();
        });
    });

    this.Then(/^I got redirected to home page and see alert message about computer update$/, function (callback) {
        expect(homepage.AlertMessageText()).to.eventually.equal('Done! Computer ' + data.ComputerNewNameForUpdate +
                                                                ' has been updated').and.notify(callback);
    });


};