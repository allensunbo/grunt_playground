describe('index page', function() {
    beforeEach(function() {
        browser().navigateTo('src/index.html');
        sleep(1);
    });

    it('path works', function() {
        expect(browser().location().path()).toBe('/register');
    });

    it('click works', function() {
        element(':button').click();
        expect(element('#message').html()).toBe('You click 1 time!');
        element(':button').click();
        expect(element('#message').html()).toBe('You click 2 times!');
    });

    it('rest service works', function() {
        element('#loadWeather').click();
        expect(element('#weather').html()).toContain('London');
    });


    it('should change url when click register/login', function() {
        element('#login').click();
        expect(browser().location().path()).toBe('/login');
        element('#register').click();
        expect(browser().location().path()).toBe('/register');
    });

});
