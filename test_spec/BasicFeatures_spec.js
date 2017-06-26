/**
 * Created by aposiker on 23.06.2017.
 */
var data = require('../json/testdata.json');
var objects = require('../json/objects.json');

describe('Basic Features test', function () {
    var homepage = require('../PageObjects/HomePage');

    it('should add new computer',function () {

        homepage.navigateToURL(objects.testsiteURL);
        homepage.AddComputer().filloutComputerInfo(data.ComputerNameToAdd, data.ComputerStartDateToAdd,
                                                    data.ComputerEndDateToAdd, data.ComputerCompanyToAdd);
        expect(homepage.AlertMessageText()).toEqual('Done! Computer ' + data.ComputerNameToAdd + ' has been created');
    });
    it('should search for added computer', function () {

        homepage.SearchComputerByName(data.ComputerNameToAdd);

        expect(homepage.computerFound(data.ComputerNameToAdd).isDisplayed()).toBeTruthy();

    });

    it('should update created computer',function () {

        homepage.UpdateComputer(data.ComputerNameToUpdate).updateComputerInfo(data.ComputerNewNameForUpdate,
                                                                                data.ComputerStartDateToUpdate,
                                                                                data.ComputerEndDateToUpdate,
                                                                                data.ComputerCompanyToUpdate);
        expect(homepage.AlertMessageText()).toEqual('Done! Computer ' +
                                                    data.ComputerNewNameForUpdate + ' has been updated');
    });


    it('should delete created computer',function () {

        homepage.UpdateComputer(data.ComputerNewNameForUpdate).deleteComputer();

        expect(homepage.AlertMessageText()).toEqual('Done! Computer has been deleted');
    });

});
