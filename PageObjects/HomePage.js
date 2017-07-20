/**
 * Created by aposiker on 23.06.2017.
 */
var objects = require("../json/objects.json");



var HomePage = function(){

    this.navigateToURL = function(url){

        browser.get(url);

    };

    this.AddComputer = function () {

        $(objects.Locators.MainPage.AddComputerBtn).click();
        return require("./AddComputer.js");
    };

    this.AlertMessageText = function(){

        return $(objects.Locators.MainPage.AlertMessage).getText()

    };

    this.SearchComputerByName = function(name){
        var searchTextBox = $(objects.Locators.MainPage.SearchTextField);
        searchTextBox.clear().then(function () {
            searchTextBox.sendKeys(name);
        });
        $(objects.Locators.MainPage.SearchBtn).click();
        return this;

    };

    this.UpdateComputer = function(name){

        this.SearchComputerByName(name);
        element(by.xpath('.//a[.="' + name + '"]')).click();
        return require('./UpdateComputer.js');


    };

    this.computerFound = function (name){

        return element(by.xpath('.//a[.="' + name + '"]'));
    };



};


module.exports = new HomePage();