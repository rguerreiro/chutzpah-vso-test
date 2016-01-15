(function () {
    "use strict";

    angular
        .module('app')
        .factory('lookupService', lookupService);

    lookupService.$inject = ["$http"];
    function lookupService($http) {

        var service = {
            getAppointments: getAppointments,
        };

        return service;

        function get(url) {
            return $http.get(url, { cache: true }).then(function (response) {
                return response.data;
            });
        }

        function getAppointments() {
            return get('/api/lookup/appointments');
        }
    }
})();