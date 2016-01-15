(function() {
    'use strict';

    angular
        .module('app.about')
        .run(appRun);

    appRun.$inject = ['routeHelper']

    function appRun(routeHelper) {
        routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                state: 'app.about',
                config: {
                    url: '/',
                    templateUrl: '/app/about/about.html'
                }
            }
        ];
    }
})();