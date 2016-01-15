(function() {
    'use strict';

    angular
        .module('blocks.confirm')
        .factory('confirmModal', confirmModal)
        .controller('ConfirmModalInstanceController', ConfirmModalInstanceController);
    
    ConfirmModalInstanceController.$inject = ['$scope', '$uibModalInstance', 'content'];
    function ConfirmModalInstanceController($scope, $uibModalInstance, content) {
        $scope.title = 'Please confirm';
        $scope.text = 'Make sure you really want to do this...';
        $scope.okButton = 'Yes';
        $scope.cancelButton = 'No';

        if (content) {
            $scope = $.extend($scope, content);
        }

        $scope.ok = function () {
            $uibModalInstance.close($scope);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss($scope);
        };
    }

    confirmModal.$inject = ['$uibModal']
    function confirmModal($uibModal ) {
        var defaultOptions = {
            animation: true,
            templateUrl: 'app/blocks/confirm/confirmModal.html',
            controller: 'ConfirmModalInstanceController',
            size: 'sm'
        };

        var service = {
            show: show
        }

        return service;

        function show(okCallback, cancelCallback, content, optionsOverride) {
            var options = $.extend(defaultOptions, optionsOverride);
            options.resolve = { 
                content: function() { 
                    return content; 
                } 
            };

            $uibModal.open(options).result.then(okCallback, cancelCallback);
        }
    }
})();