angular.module('starter')
    .controller('view1InfoCtrl', ['$scope', '$state', '$ionicHistory',function ($scope, $state, $ionicHistory) {
        $scope.gotoView = function () {
            $state.go('view1');
        }
        $scope.gotoList = function () {
            $state.go('list');
        }

    }]);
