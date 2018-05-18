/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    // RSS Feeds Suite testing if feeds and urls are defined 
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        // all feeds are defined and are not empty
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        // all feed urls are defined and are not empty
        it('Feeds urls defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        // all feed names are defined and are not empty
        it('Feeds names defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    // Menu Suite
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        // Checks if menu has class menu-hidden by default
        it('Menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu changes visibility when hamburger icon is clicked', function() {
            //defines variable to be checked when clicked 
            var visibilityCheck = $('.menu-icon-link');

            visibilityCheck.click();
            //checks if menu-hidden is false when clicked first time
            expect($('body').hasClass('menu-hidden')).toBe(false);

            visibilityCheck.click();
            //checks if menu-hidden is true when clicked second time
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    // Initial Entries Suite
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // var firstFeed = loadFeed(0);

        // async request loadFeed
        beforeEach(function(done) {
            loadFeed(0, function() {
                // done called after all of the processing is complete
                done();
            });
        });


        // if loadFeed has at least a single .entry within .feed
        it('Consists of at least one entry ehen loaded', function(done) {
            expect($('.feed .entry')).toBeDefined();
            expect($('.feed .entry').length).toBeGreaterThan(0);
            // done called after all of the processing is complete
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    // New Feed Selection Suite
    describe('New Feed Selection', function() {
        // feed
        var initialFeed;
        var feedAfter;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        /* calls first loadFeed func and puts it's results inside initialFeed
        then calls second loadFeed function to change content again. when loaded, 
        done() is ending function */
        beforeEach(function (done) {
            loadFeed(0, function () {
                initialFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('When new feed is loaded content changes', function(done) {
                feedAfter = $('.feed').html();
                // console.log(feedAfter);
                expect(initialFeed).not.toEqual(feedAfter);
                done();
            });

        });
}());