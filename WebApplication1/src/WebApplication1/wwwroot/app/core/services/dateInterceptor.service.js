(function () {
    "use strict";

    angular
        .module("app")
        .factory('dateInterceptor', dateInterceptor);
        
        dateInterceptor.$inject = ['moment'];
        function dateInterceptor(moment) {
            
            var interceptor = {
                'response': function (response) {
                    if (response.data && angular.isObject(response.data)) {
                        convertDateStringsToDates(response.data);
                    }
                    return response;
                }
            };

            return interceptor;

            function convertDateStringsToDates(object) {
                // ensure that we're processing an object
                if (!angular.isObject(object)) {
                    return object;
                }

                for (var key in object) {
                    if (!object.hasOwnProperty(key)) {
                        continue;
                    }
                    var value = object[key];

                    // check for string properties with a date format
                    if (angular.isString(value) && key.indexOf('Date') > -1) {
                        var newDate = moment(value); // parse the date
                        if(newDate.isValid())
                            object[key] = newDate.toDate(); // we're mutating the response directly
                    } else if (angular.isObject(value)) {
                        convertDateStringsToDates(value); // recurse into object
                    }
                }
                return null;
            }
        }
})();