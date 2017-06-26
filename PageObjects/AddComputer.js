/**
 * Created by aposiker on 23.06.2017.
 */
var objects = require("../json/objects.json");
var SelectWrapper = require("../util/select-wrapper");
var companyDropdown = new SelectWrapper(by.xpath(objects.Locators.AddCompPage.CompanyDropDown));


var AddComputer = function () {

    this.filloutComputerInfo = function (Name, IntrDate, DescDate, Company) {

        element(by.xpath(objects.Locators.AddCompPage.ComputerName)).sendKeys(Name);
        element(by.xpath(objects.Locators.AddCompPage.IntroducedDate)).sendKeys(IntrDate);
        element(by.xpath(objects.Locators.AddCompPage.DiscontinuedDate)).sendKeys(DescDate);
        companyDropdown.selectByText(Company);
        element(by.xpath(objects.Locators.AddCompPage.CreateThisComputerBtn)).click();
        return require('./HomePage');

    };

};
 module.exports = new AddComputer();