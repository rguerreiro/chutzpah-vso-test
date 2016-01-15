(function() {
    'use strict';

    var app = angular.module('app');

    app.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    function toastrConfig(toastr) {
        toastr.options.closeButton = true;
        //toastr.options.progressBar = true;
        toastr.options.newestOnTop = true;
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-top-center';
    }

    var config = {
        appTitle: 'Web Application 1',
        version: '1.0.0'
    };
    app.value('config', config);

    app.config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'routeHelperConfigProvider', 'cfpLoadingBarProvider'];
    function configure($stateProvider, $urlRouterProvider, $httpProvider, routeHelperConfigProvider, cfpLoadingBarProvider) {
        // intercept responses and convert date strings into real dates
        $httpProvider.interceptors.push('dateInterceptor'); 

        // Configure the common route provider
        routeHelperConfigProvider.config.$stateProvider = $stateProvider;
        routeHelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
        // Configure the loading bar
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();