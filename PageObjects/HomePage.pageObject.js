/**
 * Created by aposiker on 23.06.2017.
 */
const objects = require("../json/objects.json");



class HomePage {
    constructor() {
        this.navigateToURL = function (url) {

            return browser.get(url);
        };
        this.computersTable = $$(objects.Locators.MainPage.ComputersTable);
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

    computerTable(){

        return this.computersTable;
    };

    tableHeaders(){
        var headers = $$('.computers.zebra-striped>thead>tr>th').getText()

            // cells = [$$(tableRows).$$('td').getText()],




        return headers;


    }

    tableContents(){
        var tableRows = '.computers.zebra-striped>tbody>tr',
            cells = $$(tableRows).map(function(elm){
                return elm.$$('td').getText();
            });
        return cells;
    }

    parsedTable(){
        let that=this;
         return that.tableHeaders().then(function (headers1){
            return that.tableContents().then(function (cells1){
                let text = [headers1].concat(cells1),
                    keys = text.shift(),
                    obj = text.map(function(values) {
                        return keys.reduce(function(o, k, i) {
                            o[k] = values[i];
                            return o;
                        }, {});
                    });
                return obj;

            });

        }) ;
    }



}

module.exports = new HomePage();