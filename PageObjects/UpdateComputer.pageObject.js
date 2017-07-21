/**
 * Created by aposiker on 23.06.2017.
 */
var objects = require("../json/objects.json");
var SelectWrapper = require("../util/select-wrapper");


class UpdateComputer {

    constructor(){
        this.nameTextBox = $(objects.Locators.UpdateCompPage.ComputerName);
        this.introduceDate = $(objects.Locators.UpdateCompPage.IntroducedDate);
        this.discontinuedDate = $(objects.Locators.UpdateCompPage.DiscontinuedDate);
        this.companySelector = new SelectWrapper(by.css(objects.Locators.UpdateCompPage.CompanyDropDown));
        this.SaveThisComputerBtn = $(objects.Locators.UpdateCompPage.SaveThisComputerBtn);
        this.DeleteThisCompBtn = $(objects.Locators.UpdateCompPage.DeleteThisCompBtn);
    }
    updateComputerInfo(Name, IntrDate, DescDate, Company) {
        var self = this;

        self.nameTextBox.clear().then(function () {
            self.nameTextBox.sendKeys(Name);
        });
        self.introduceDate.clear().then(function () {
            self.introduceDate.sendKeys(IntrDate);
        });

        self.discontinuedDate.clear().then(function () {
            self.discontinuedDate.sendKeys(DescDate);
        });
        self.companySelector.selectByText(Company);
        self.SaveThisComputerBtn.click();
        // return require('./HomePage.pageObject.js');

    };

    deleteComputer() {

        this.DeleteThisCompBtn.click();
        return require('./HomePage.pageObject.js');
    };

};

module.exports = new UpdateComputer();