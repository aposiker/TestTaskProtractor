/**
 * Created by aposiker on 23.06.2017.
 */
var objects = require("../json/objects.json");
var SelectWrapper = require("../util/select-wrapper");



class AddComputer{
    constructor() {
        this.ComputerName = $(objects.Locators.AddCompPage.ComputerName);
        this.IntroducedDate = $(objects.Locators.AddCompPage.IntroducedDate);
        this.DiscontinuedDate = $(objects.Locators.AddCompPage.DiscontinuedDate);
        this.companyDropdown = new SelectWrapper(by.css(objects.Locators.AddCompPage.CompanyDropDown));
        this.CreateThisComputerBtn = $(objects.Locators.AddCompPage.CreateThisComputerBtn);
    }

    filloutComputerInfo(Name, IntrDate, DescDate, Company) {

        this.ComputerName.sendKeys(Name);
        this.IntroducedDate.sendKeys(IntrDate);
        this.DiscontinuedDate.sendKeys(DescDate);
        this.companyDropdown.selectByText(Company);
        this.CreateThisComputerBtn.click();
        // return require('./HomePage');

    };

};

module.exports = new AddComputer();