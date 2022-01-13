const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    // NOT IDEAL TO LOOK FOR ELEMENTS BY OBFUSCATED CLASS NAMES AS CLASS NAMES MIGHT CHANGE IN THE FUTURE
    // HOWEVER, THERE'S NOT AN EASY WORKAROUND FOR THIS PROBLEM IN THIS PARTICULAR CASE

    get findButton(){
        return $$('.dcdcdd28')[0].then(item => item.$('a.c3901770'));
        // var item = await $$('.dcdcdd28')[0];
        // return item.$('a.c3901770')
    }

    get findPropertyPricesButton(){
        return $$('div._5345e71b')[0].then(parent => {
            return parent.$('._41b47eef').then(subParent => {
                return subParent.$('nav').then(nav => {
                    return nav.$('div[aria-label="Market intelligence"]').then(div => {
                        return div.$('div[class="dropdown__content f764de93"]').then(ul => {
                            return ul.$('ul[class="abbecdbc"]').then(li => {
                                return li.$$('li[class="_4eec698b undefined"]')[1].then(ahref => {
                                    return ahref.$('a'); //?How to get?       
                            });
                        });
                    });
                });            
            });
        });
    });
}

    get findFirstRealEstateFromTopGainers(){
      //  return $('body[dir="ltr"]').then(item => {
            return $$('section[class="idx-mostview clear-fix container"]')[0].then(child => {
                return child.$('div[class="idx-mbox"]').then(child1 => {
                    return child1.$('ul[class="pd-25"]').then(child2 => {
                        return child2.$$('li')[0].then(child3 => {
                            return child3.$('a');
                        });
                    });
                });
            });
       // });
    }

    get findMarketIntelButton(){
        return $$('div._5345e71b')[0].then(parent => {
            return parent.$('._41b47eef').then(subParent => {
                return subParent.$('nav').then(nav => {
                    return nav.$('div[aria-label="Market intelligence"]');
                });            
            });
        }); 
    }
    
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
