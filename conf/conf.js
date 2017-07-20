/**
 * Created by aposiker on 23.06.2017.
 */
exports.config = {

    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        browserName: 'chrome'
    }],

    framework: 'jasmine2',

    //	seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../test_spec/BasicFeatures_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {


        browser.ignoreSynchronization=true;


        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
}