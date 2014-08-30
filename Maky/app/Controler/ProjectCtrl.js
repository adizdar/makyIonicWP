angular.module('maky.controllers', [])

.controller('ProjectCtrl', function ($scope, $ionicPopup, $ionicModal) {

    //show popup on page initialization
    $scope.init = function () {
        $ionicPopup.prompt({
            title: "Enter project name",
            inputType: 'text',
            buttons: [{ text: 'OK', type: 'button-light' }]

        }).then(function (title) {
            //add page title
            $scope.projectTitle = title;
        });
    };

    //create scrum card modal
        $ionicModal.fromTemplateUrl('app/Template/popup-scrumCard.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.scrumCardModal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });


});
