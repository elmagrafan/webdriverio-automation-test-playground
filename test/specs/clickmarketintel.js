const HomePage = require('../pageobjects/home.page');


describe('Click market intelligence dropdown button', () => {
    it('should display correctly the dropdown list for it', async () => {
        // open main page
        await HomePage.open();

        // get find market intelligence drop down list button & click it
        const findMarketIntelButton = await HomePage.findMarketIntelButton;
        await findMarketIntelButton.click();

        // get "Property Prices" link from dropdown list & click it
        const findPropertyPricesButton = await HomePage.findPropertyPricesButton;
        await findPropertyPricesButton.click();

        // get first element from "Top Gainers" list from the page & click it
        const findFirstRealEstateFromTopGainers = await HomePage.findFirstRealEstateFromTopGainers;
        await findFirstRealEstateFromTopGainers.click();

        // we verify that all the the text "Market Sale Price and Value Trend for" 
        // is included in the page that has been last clicked on by checking the
        // element main-heading from the page
        let isAtTopGainersHeader = true;
        const isTopGainersHeader = 'Market Sale Price and Value Trend for';
        const topGainersHeader = await $('div[class="index-wrap container"]')
                            .then(item => item.$('main[class="left FullWidthMain"]')
                            .then(item1 => item1.$('section[id="pview_search_index_content"]')
                            .then(item2 => item2.$('h1[class="main-heading "]').getText())));
        isAtTopGainersHeader = topGainersHeader.includes(isTopGainersHeader);

        await expect(topGainersHeader).toBeTruthy();
    });     
});