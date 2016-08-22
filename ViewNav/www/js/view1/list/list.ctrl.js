angular.module('starter')
    .controller('view1ListCtrl', ['$scope', '$state', '$ionicHistory',function ($scope, $state, $ionicHistory) {
        $scope.gotoInfo = function () {
            $state.go('info');
        }

    }]);
