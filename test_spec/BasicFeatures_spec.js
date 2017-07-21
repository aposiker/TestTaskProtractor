/**
 * Created by aposiker on 23.06.2017.
 */
var data = require('../json/testdata.json');
var objects = require('../json/objects.json');

const homepage = require('../PageObjects/HomePage.pageObject'),
    addComputer = require('../PageObjects/AddComputer.pageObject'),
    updateComputer = require('../PageObjects/UpdateComputer.pageObject');


describe('Basic Features test', function () {


    it('should add new computer',function () {

        homepage.navigateToURL(objects.testsiteURL);
        homepage.addComputer();
        addComputer.filloutComputerInfo(data.ComputerNameToAdd, data.ComputerStartDateToAdd,
                                                    data.ComputerEndDateToAdd, data.ComputerCompanyToAdd);
        expect(homepage.AlertMessageText()).toEqual('Done! Computer ' + data.ComputerNameToAdd + ' has been created');
    });
    it('should search for added computer', function () {

        homepage.SearchComputerByName(data.ComputerNameToAdd);

        expect(homepage.computerFound(data.ComputerNameToAdd).isDisplayed()).toBeTruthy();

    });

    it('should update created computer',function () {

        homepage.UpdateComputer(data.ComputerNameToUpdate);
        updateComputer.updateComputerInfo(data.ComputerNewNameForUpdate,
                                                                                data.ComputerStartDateToUpdate,
                                                                                data.ComputerEndDateToUpdate,
                                                                                data.ComputerCompanyToUpdate);
        expect(homepage.AlertMessageText()).toEqual('Done! Computer ' +
                                                    data.ComputerNewNameForUpdate + ' has been updated');
    });


    it('should delete created computer',function () {

        homepage.UpdateComputer(data.ComputerNewNameForUpdate);
        updateComputer.deleteComputer();

        expect(homepage.AlertMessageText()).toEqual('Done! Computer has been deleted');
    });

});
