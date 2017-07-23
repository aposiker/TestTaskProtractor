/**
 * Created by aposiker on 23.06.2017.
 */
const objects = require("../json/objects.json");



class HomePage {
    constructor() {
        this.navigateToURL = function (url) {

            return browser.get(url);
        };
        this.AddComputerBtn = $(objects.Locators.MainPage.AddComputerBtn);
        this.AlertMessage = $(objects.Locators.MainPage.AlertMessage);
        this.searchTextBox = $(objects.Locators.MainPage.SearchTextField);
        this.SearchBtn = $(objects.Locators.MainPage.SearchBtn);
    }

    addComputer(){

        return this.AddComputerBtn.click();

    };

    AlertMessageText(){

        return this.AlertMessage.getText();

    };

    SearchComputerByName(name){
        const self = this;

        self.searchTextBox.clear().then(function () {
            self.searchTextBox.sendKeys(name);
        });
        return self.SearchBtn.click();


    };

    ClickOnComputer(name){

        return element(by.xpath(`.//a[.="${name}"]`)).click();

    };

    computerFound(name){

        return element(by.xpath(`.//a[.="${name}"]`));
    };



}

module.exports = new HomePage();