angular.module('maky.controllers')

.controller('TodoCtrl', function ($scope) {
    
    //remove card on close tap
    $scope.remove = function ($index) {
        $scope.cards.splice($index, 1);
    };

    //edit card *****
    $scope.editCard = function (index) {
        $scope.scrumCardModal.show();
        $scope.cards.splice(index, 1);
    };

});