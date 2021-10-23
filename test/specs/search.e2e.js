const SearchResult = require('../pageobjects/searchresult.page');

const dubaiMarinaUrlAddressSuffix = 'dubai/dubai-marina/';
const dubaiMarinaLocation = 'Dubai Marina';
const SearchType = {
    Sale: 'for-sale',
    Rent: 'to-rent'
}

describe('Dubai Marina property sale search result', () => {
    it('should match the selected location criteria', async () => {
        // open properties for sale located at Dubai Marina
        await SearchResult.open(SearchType.Sale, dubaiMarinaUrlAddressSuffix);

        // get all articles from the search result page
        const articleListItems = await SearchResult.articleListItems;

        // check location div matches "Dubai Marina" on each article
        let isLocatedInDubaiMarina = true;
        for (const item of articleListItems) {
            const locationInfo = await item.$('div[aria-label="Location"]').getText();
            isLocatedInDubaiMarina = locationInfo.includes(dubaiMarinaLocation);
            if (!isLocatedInDubaiMarina) {
                break;
            }
        }
        
        // assert that all items are indeed matching the search criteria
        await expect(isLocatedInDubaiMarina).toBeTruthy();        
    });
});


