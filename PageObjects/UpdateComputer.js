/**
 * Created by aposiker on 23.06.2017.
 */
var objects = require("../json/objects.json");
var SelectWrapper = require("../util/select-wrapper");
var companySelector = new SelectWrapper(by.xpath(objects.Locators.UpdateCompPage.CompanyDropDown));


var UpdateComputer = function () {

    this.updateComputerInfo = function (Name, IntrDate, DescDate, Company) {
        var nameTextBox = element(by.xpath(objects.Locators.UpdateCompPage.ComputerName)),
            introduceDate = element(by.xpath(objects.Locators.UpdateCompPage.IntroducedDate)),
            discontinuedDate = element(by.xpath(objects.Locators.UpdateCompPage.DiscontinuedDate));

        nameTextBox.clear().then(function () {
            nameTextBox.sendKeys(Name);
        });
        introduceDate.clear().then(function () {
            introduceDate.sendKeys(IntrDate);
        });

        discontinuedDate.clear().then(function () {
            discontinuedDate.sendKeys(DescDate);
        });
        companySelector.selectByText(Company);
        element(by.xpath(objects.Locators.UpdateCompPage.SaveThisComputerBtn)).click();
        return require('./HomePage.js');

    };

    this.deleteComputer = function () {

        element(by.xpath(objects.Locators.UpdateCompPage.DeleteThisCompBtn)).click();
        return require('./HomePage.js');
    };

};

module.exports = new UpdateComputer();