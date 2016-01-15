(function () {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    appRun.$inject = ['routeHelper']

    function appRun(routeHelper) {
        routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                state: 'app',
                config: {
                    abstract: true,
                    templateUrl: '/app/layout/shell.html',
                    controller: 'MainController as vm'
                }
            }
        ];
    }
})();