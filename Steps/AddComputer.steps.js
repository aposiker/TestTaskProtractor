/**
 * Created by aposiker on 22.07.2017.
 */
const data = require('../json/testdata.json'),
    objects = require('../json/objects.json'),
    homepage = require('../PageObjects/HomePage.pageObject'),
    addComputer = require('../PageObjects/AddComputer.pageObject'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function () {

    this.Given(/^I'm on a home page$/, function (callback) {
        browser.ignoreSynchronization = true;
        homepage.navigateToURL(objects.testsiteURL).then(function () {
            callback();
        });


    });

    this.When(/^I press Add computer button$/, function (callback) {
        homepage.addComputer().then(function () {
            callback();
        });

    });
    this.Then(/^I got redirect to Add computer page$/, function (callback) {
        expect(addComputer.PageHeader.getText()).to.eventually.equal('Add a computer').and.notify(callback);
    });

    this.When(/^I fill out computer info$/, function (callback) {
        addComputer.filloutComputerInfo(data.ComputerNameToAdd, data.ComputerStartDateToAdd,
                                        data.ComputerEndDateToAdd, data.ComputerCompanyToAdd);
        callback();

    });
    this.When(/^press Add This Computer button$/, function (callback) {
        addComputer.pressAddComputerButton().then(function () {
            callback();
        });
    });

    this.Then(/^I got redirected to hompage and see alert message about added computer$/, function (callback) {
        expect(homepage.AlertMessageText()).to.eventually.equal('Done! Computer ' + data.ComputerNameToAdd +
                                                                ' has been created').and.notify(callback);

    });


};
