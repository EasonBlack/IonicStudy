// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordovaBeacon'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller("ExampleController", function ($scope, $rootScope, $ionicPlatform, $cordovaBeacon) {

        $scope.beacons = {};
        //$scope.message = 'asdfasdfasdf';
        $ionicPlatform.ready(function () {
            $scope.message = 'xxxxxxxxxxxxxx';
            $scope.msg = "HHHHHHHHHH";
            $cordovaBeacon.requestWhenInUseAuthorization();

            $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function (event, pluginResult) {
                $scope.msg = "Hello World";
                var uniqueBeaconKey;
                for (var i = 0; i < pluginResult.beacons.length; i++) {
                    uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                    $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
                    alert(12);
                }
                $scope.$apply();
            });
            $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("test", "E2C56DB5-DFFB-48D2-B060-D0F5A71096E0"));

        });
    });