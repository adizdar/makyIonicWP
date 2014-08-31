angular.module('maky.controllers.project', [])

.controller('ProjectCtrl', function ($scope, $ionicPopup, $ionicModal, newCardService, $timeout) {
    //to cach popUp input model, by default it is data.response
    $scope.data = {};
    $scope.cards = [];
    //show popup on page initialization
    $scope.init = function () {
        $ionicPopup.prompt({
            title: "Enter project name",
            inputType: 'text',
            scope: $scope,
            buttons: [{
                text: '<b>OK</b>',
                type: 'button-light',
                onTap: function (e) {
                    if (!$scope.data.response) {
                        //don't allow the user to close unless he enters title
                        e.preventDefault();
                    } else
                        return $scope.data.response;

                }
            }]

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
        $scope.scrumCardModal.show();
    };
    $scope.closeModal = function () {
        $scope.scrumCardModal.remove();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.scrumCardModal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });

    $scope.createCard = function (card) {
        //newCardService.setCard(card);
        $scope.cards.push(card);
        $scope.scrumCardModal.hide();
    };

});
