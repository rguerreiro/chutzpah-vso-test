(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routeHelper']

    function appRun(routeHelper) {
        routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                state: 'app.dashboard',
                config: {
                    url: '/',
                    templateUrl: '/app/dashboard/dashboard.html',
                    controller: "DashboardController as vm",
                    resolve: {
                        appointments: function (lookupService) {
                            return lookupService.getAppointments();
                        }
                    }
                }
            }
        ];
    }
})();