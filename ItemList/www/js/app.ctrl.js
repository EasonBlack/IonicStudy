angular.module('starter')
    .controller('appCtrl', ['$scope', function ($scope) {
        $scope.catagorys = [
            {
                name: "I.Main lobby's corridor area",
                fold: false,
                items: [
                    {name: 'aaaa', time: '08:10', checked: false},
                    {name: 'bbbb', time: '08:10', checked: false},
                    {name: 'cccc', time: '08:10', checked: false},
                ]
            },
            {
                name: "II.VIP's corridor and meeting room area",
                fold: false,
                items: [
                    {name: 'dddd', time: '08:10', checked: false},
                    {name: 'eeee', time: '08:10', checked: false},
                    {name: 'ffff', time: '08:10', checked: false},
                ]
            }
        ]

        $scope.toggleCatagory = function (catagory) {
            catagory.fold = !catagory.fold;
        }

        $scope.toggleStatus = function (item) {
            item.checked = !item.checked;
        }

        $scope.getChecked = function (catagory) {
            var num = 0;
            catagory.items.forEach(function (o, i) {
                if (o.checked) {
                    num++;
                }
            })
            return num;
        }
    }])