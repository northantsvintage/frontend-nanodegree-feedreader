/* ------------------------------- RSSFEED TESTS ---------------------------------- */
$(function() {

    /* ------------------------------- FEEDS ---------------------------------- */
    // RSS Feeds Suite testing if feeds and urls are defined 
    describe('RSS Feeds', function() {

        // all feeds are defined and are not empty
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // as we loop through each feed we check all feed urls are defined and are not empty
        it('Feeds urls defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // as we loop through each feed we check all feed names are defined and are not empty
        it('Feeds names defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* ------------------------------- MENU ---------------------------------- */

    // Menu Suite
    describe('The Menu', function() {
        var body = $('body');

        // Checks if menu has class menu-hidden by default and is hidden
        it('Menu hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Clicking on menu is testing .menu-hidden is hidden or visible
        it('Menu changes visibility when hamburger icon is clicked', function() {
            //defines variable to be checked when clicked 
            var visibilityCheck = $('.menu-icon-link');
            // if the menu has class menu-hidden(makes it hidden), clicking makes it visible
            if (body.hasClass('menu-hidden')) {
                visibilityCheck.click();
                expect(body.hasClass('menu-hidden')).toBe(false);
            }
            // if the menu does not have class menu-hidden(makes it hidden), clicking makes it hidden
            if (!(body.hasClass('menu-hidden'))) {
                visibilityCheck.click();
                expect(body.hasClass('menu-hidden')).toBe(true);
            }
        });
    });

    /* ------------------------------- INITIAL ENTRIES ---------------------------------- */


    // Initial Entries Suite
    describe('Initial Entries', function() {
        var initialEntry;

        // loadFeed functing is called and at least one element .entry is withing .feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                // done called after all of the processing is complete
                initialEntry = $('.feed .entry');
                done();
            });
        });

        // check that it is not empty, at least a single .entry within .feed
        it('Consists of at least one entry when loaded', function(done) {
            expect(initialEntry.length).toBeGreaterThan(0);
            // done called after all of the processing is complete
            done();
        });
    });

    /* ------------------------------- NEW FEED ---------------------------------- */
    // New Feed Selection Suite
    describe('New Feed Selection', function() {
        // feed 0 is initialFeed
        var initialFeed;
        // feed 1 is feedAfter
        var feedAfter;

        /* calls first loadFeed func and puts it's results inside initialFeed
        then calls second time loadFeed to change content again. when loaded, 
        feed 0 and feed 1 are different and done() is ending function */
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                loadFeed(1, function() {
                feedAfter = $('.feed').html();
                done();
                });
            });
        });

        // checking if feed 0 and feed 1 are different
        it('When new feed is loaded content changes', function(done) {
            expect(initialFeed).not.toEqual(feedAfter);
            done();
        });

    });
}());