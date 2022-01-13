const HomePage = require('../pageobjects/home.page');

const uaeLocationHeader = 'UAE';

describe('Click find button', () => {
    it('should display correctly all properties located in the UAE', async () => {
        // open main page
        await HomePage.open();

        // get find button div & click it
        const findButton = await HomePage.findButton;
        await findButton.click();

        // we verify that all the properties found are located in the UAE by checking the page header
        // is displayed correctly, i.e. "Properties for rent in UAE"
        //how to find page header????
        const uaeLocation = await $('#search-header')
            .then(item => item.$('._2aa3d08d')
                            .then(item => item.getText()));
        const isUaeLocation = uaeLocation.includes(uaeLocationHeader);

        await expect(isUaeLocation).toBeTruthy();
    });     
});