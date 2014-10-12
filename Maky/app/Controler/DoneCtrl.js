angular.module('maky.controllers.done', [])

.controller('DoneCtrl', function ($scope) {

    //remove card on close tap
    $scope.remove = function ($index) {
        $scope.doneArray.splice($index, 1)
    };

    //move card to another page
    $scope.moveCard = function ($index) {
        createMovePopup($scope, $index, 'done');
    };

});