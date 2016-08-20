angular.module('view1.module', ['ionic'])
    .config(function ($stateProvider,  $ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
        $stateProvider
            .state('view1', {
                cache: false,
                url: '/view1',
                templateUrl: '../www/js/view1/view1.html',
                controller: 'view1Ctrl'
            })
            .state('list', {
                cache: false,
                url: '/list',
                templateUrl: '../www/js/view1/list/list.tpl.html',
                controller: 'view1ListCtrl'
            })
            .state('info', {
                cache: false,
                url: '/info',
                templateUrl: '../www/js/view1/info/info.tpl.html',
                controller: 'view1InfoCtrl'
            })
    })
    .controller('view1Ctrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

        $scope.gotoInfo = function(){
            $state.go('info')
        }
    }])