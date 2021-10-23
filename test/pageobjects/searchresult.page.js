const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResult extends Page {
    /**
     * define selectors using getter methods
     */
    get articleListItems() {
        return $$('li[role="article"]');
    }
   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open (searchType, location) {
        return super.open(`${searchType}/property/${location}`);
    }
}

module.exports = new SearchResult();
