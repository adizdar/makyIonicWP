angular.module('maky.controllers', [])

.controller('ProjectCtrl', function ($scope, $ionicPopup) {

    //show popup on page initialization
    $scope.init = function () {
        $ionicPopup.prompt({
            title: "Enter project name",
            inputType: 'text'
        }).then(function (title) {
            //add page title
            $scope.projectTitle = title;
        });
    };
});


