(function () {
    'use strict';

    angular
        .module('app', [
            /* Angular modules */
            'ngAnimate', 'ngResource',
            /* Angular UI*/
            'ui.router', 'ui.bootstrap',
            /* 3rd party modules */
            'angular-loading-bar',
            /* Reusable cross app code modules */
            'blocks.router', 'blocks.confirm',
            /* Feature areas */
            'app.layout',
            'app.dashboard',
            'app.about'
        ]);
})();