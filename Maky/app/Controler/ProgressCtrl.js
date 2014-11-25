angular.module('maky.controllers')

.controller('ProgressCtrl', function ($scope) {

    //remove card on close tap
    $scope.remove = function ($index) {
        $scope.progressArray.splice($index, 1)
    };

    //move card to another page
    $scope.moveCard = function ($index) {
        createMovePopup($scope, $index, 'progress');
    };

});