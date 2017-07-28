/**
 * Created by aposiker on 23.06.2017.
 */
exports.config = {


    seleniumAddress: 'http://localhost:4444/wd/hub',


    multiCapabilities: [{
        browserName: 'chrome'
    }],

    specs: [
        // './Features/AddComputer.feature',
        './Features/SearchComputer.feature',
        // './Features/UpdateComputer.feature',
        // './Features/DeleteComputer.feature'
    ],

    framework: 'custom',
    frameworkPath: './node_modules/protractor-cucumber-framework',
    output: './output.json',


    cucumberOpts: {

        require: ['./Steps/*.steps.js'],
        format: 'pretty',


    },
}


