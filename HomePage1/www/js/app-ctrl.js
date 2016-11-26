angular.module('starter')
  .controller('appCtrl', ['$scope', '$ionicSideMenuDelegate', function ($scope, $ionicSideMenuDelegate) {
    $scope.tasks = [
      {id: 1, title: 'aaaaaaa'},
      {id: 2, title: 'bbbbbbb'},
      {id: 3, title: 'ccccccc'},
      {id: 4, title: 'ddddddd'},
      {id: 5, title: 'eeeeeee'},
      {id: 6, title: 'fffffff'},
      {id: 7, title: 'ggggggg'},
      {id: 8, title: 'hhhhhhh'},
      {id: 9, title: 'iiiiiii'}
    ]

    $scope.projects = [
      {id: 1, title: 'Project One'},
      {id: 2, title: 'Project Two'},
      {id: 3, title: 'Project Three'},
      {id: 4, title: 'Project Four'},
      {id: 5, title: 'Project Five'}
    ]

    $scope.images = [
      {id:1 , src: 'http://placehold.it/400/564782/000000'},
      {id:2 , src: 'http://placehold.it/400/128983/000000'},
      {id:3 , src: 'http://placehold.it/400/897251/000000'}
    ]

    $scope.activeProject = $scope.projects[0];

    $scope.toggleProjects = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.selectProject = function (project) {
      $scope.activeProject = project;
      $ionicSideMenuDelegate.toggleLeft(false);
    }
  }]);
