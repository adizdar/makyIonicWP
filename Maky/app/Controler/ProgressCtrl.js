angular.module('maky.controllers.progress', [])

.controller('ProgressCtrl', function ($scope) {

    //remove card on close tap
    $scope.remove = function ($index) {
        $scope.cards.splice($index, 1);
    };

});