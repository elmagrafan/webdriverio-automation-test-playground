const HomePage = require('../pageobjects/home.page');

const dubaiLocation = 'dubai';
const dubaiApartmentRentalHrefBase = (location) => `to-rent/apartments/${location}/`;

describe('Popular searches to rent section', () => {
    it('should have correctly working links to properties', async () => {
        // open properties for sale located at Dubai Marina
        await HomePage.open();

        // get popular search rent button div & click it
        const popularSearchesToRentDiv = await HomePage.popularSearchesForRentButtonDiv;
        await popularSearchesToRentDiv.click();

        // get list of popular search links
        const listOfLinksUnderDubaiApartments = await HomePage.linksUnderDubaiApartmentsContainer;
        const listItems = await listOfLinksUnderDubaiApartments.$('ul').$$('li');
        let isCorrectUrl = true;
        for (const item of listItems) {
            const linkToPage = await item.$('a').getAttribute('href');

            // check that we have a valid URL of the form to-rent/apartments/dubai/<something>
            // we verify that to-rent/apartments/dubai/ is part of the link and that there is at least one more char after last / in the URL
            const urlBase = dubaiApartmentRentalHrefBase(dubaiLocation);
            isCorrectUrl = 
                linkToPage.includes(urlBase) && 
                linkToPage.lastIndexOf(urlBase) + 1 < linkToPage.length;

            if (!isCorrectUrl) {
                break;
            }
        }
        
        expect(isCorrectUrl).toBeTruthy();
    });
});


