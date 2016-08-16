angular.module('starter')
    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.requests = [
            {name: 'aaaa', time: '08:10'},
            {name: 'bbbb', time: '08:10'},
            {name: 'cccc', time: '08:10'},
            {name: 'dddd', time: '08:10'}
        ];

        $scope.checks = [
            {name: 'aaaa', time: '08:10'},
            {name: 'bbbb', time: '08:10'},
            {name: 'cccc', time: '08:10'},
        ];

        $scope.clicker = function(){
            alert(123);
        }
    }]);