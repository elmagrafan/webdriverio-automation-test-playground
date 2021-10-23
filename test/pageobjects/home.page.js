const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    // NOT IDEAL TO LOOK FOR ELEMENTS BY OBFUSCATED CLASS NAMES AS CLASS NAMES MIGHT CHANGE IN THE FUTURE
    // HOWEVER, THERE'S NOT AN EASY WORKAROUND FOR THIS PROBLEM IN THIS PARTICULAR CASE
    get popularSearchesForRentButtonDiv() {
        return $$('.d8530318')[1];
    }

    get linksUnderDubaiApartmentsContainer() {
        return $$('div.fc910dcd')[0].then(item => {
            return item.$$('div._5a12e6f6')[0];
        });
    }
}

module.exports = new HomePage();
