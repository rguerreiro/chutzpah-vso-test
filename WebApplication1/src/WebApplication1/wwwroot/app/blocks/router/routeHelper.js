(function () {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routeHelperConfig', routeHelperConfig)
        .factory('routeHelper', routeHelper);

    // Must configure via the routeHelperConfigProvider
    function routeHelperConfig() {
        this.config = {
            // These are the properties we need to set
            // $stateProvider: undefined
            // $urlRouterProvider: undefined
            // docTitle: ''
            // resolveAlways: {ready: function(){ } }
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    }

    routeHelper.$inject = ['$location', '$rootScope', '$state', 'routeHelperConfig', 'toastr']; 

    function routeHelper($location, $rootScope, $state, routeHelperConfigProvider, toastr) { 
        var routes = [];
        var $stateProvider = routeHelperConfigProvider.config.$stateProvider;
        var $urlRouterProvider = routeHelperConfigProvider.config.$urlRouterProvider;

        var service = {
            configureRoutes: configureRoutes,
            getRoutes: getRoutes
        };

        init();

        return service;
        ///////////////

        function configureRoutes(routes) {
            routes.forEach(function (route) {
                $stateProvider.state(route.state, route.config);
            });
            $urlRouterProvider.otherwise('/');
        }

        function handleRoutingErrors() {
            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
                if (handlingRouteChangeError) {
                    return;
                }
                routeCounts.errors++;
                handlingRouteChangeError = true;
                var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) || 'unknown target';
                var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');
                $location.path('/');
            });
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                toastr.error(error.data);
                $state.go('app.dashboard');
            });
        }

        function init() {
            handleRoutingErrors();
        }

        function getRoutes() {
            return routes;
        }
    }
})();