const data = require('../json/testdata.json'),
    homepage = require('../PageObjects/HomePage.pageObject'),
    parseTable = require('../util/tableParse'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;


chai.use(require('chai-like'));
chai.use(chaiAsPromised);
chai.use(require('chai-things'));


module.exports = function () {

//     this.When(/^I type comptuer's name in a search field and press search button$/, function (callback) {
//         homepage.SearchComputerByName(data.ComputerNameToAdd).then(function () {
//             callback();
//         });
//     });
//
//     this.Then(/^If computer with typed name exists, it should be displayed$/, function (callback) {
//         expect(homepage.computerFound(data.ComputerNameToAdd).isDisplayed()).to.eventually.equal(true)
//                                                                                 .and.notify(callback);
//     });
//
// };

    this.When(/^I type "([^"]*)" computer name in a search field and press search button$/, function (arg1, callback) {
        homepage.SearchComputerByName(arg1).then(function () {
            callback();
        });
    });

    this.Then(/^I can see following computers:$/, function (table, callback) {

         expect(homepage.parsedTable()).to.eventually.deep.equal(table.hashes()).and.notify(callback);


    });
    this.Then(/^I can see "([^"]*)" computer from the list$/, function (arg1, callback) {
       homepage.parsedTable().then(function (tableObj) {
           tableObj.map(function (rows) {
               if (rows["Computer name"] === arg1) {
                   callback();
               }
           })
       })
    });

    this.Then(/^"([^"]*)" computer have "([^"]*)" value in "([^"]*)" column$/, function (arg1, arg2, arg3, callback) {
        homepage.parsedTable().then(function (tableObj) {
            tableObj.map(function (rows) {
                if ((rows["Computer name"] === arg1)&&(rows[arg3]===arg2)) {
                    callback();
                }
            })
        })
    });


};