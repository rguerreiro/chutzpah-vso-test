(function() {
    'use strict';

    angular.module('app')
        .constant('_', window._)
        .constant('toastr', toastr)
        .constant('moment', moment)
        .run(appRun);

    appRun.$inject = ['$rootScope'];

    function appRun($rootScope) {
        $rootScope._ = window._;
    }
})();