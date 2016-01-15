(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ['appointments'];
    function DashboardController(appointments) {
        var vm = this;

        vm.appointments = appointments;
    }
})();