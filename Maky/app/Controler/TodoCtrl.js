angular.module('maky.controllers.todo', [])

.controller('TodoCtrl', function ($scope) {
    
    //remove card on close tap
    $scope.remove = function ($index) {
        $scope.cards.splice($index, 1);
    };

});