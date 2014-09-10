angular.module('maky.controllers.project', [])

.controller('ProjectCtrl', function ($scope, $ionicPopup, $ionicModal, newCardService, $timeout) {

    //to cach popUp input model, by default it is data.response
    $scope.data = {};
    $scope.move = {};

    //start array, elements go firs to to todo page
    //we send back items to cards when we want cards back on todo page
    $scope.cards = [];

    //arrays for individual pages
    $scope.progressArray = [];
    $scope.doneArray = [];

    $scope.ionicPopup = $ionicPopup;

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

    //create new scrum card modal
    $ionicModal.fromTemplateUrl('app/Template/popup-scrumCard.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.scrumCardModal = modal;
    });
    $scope.openModal = function () {
        $scope.scrumCardModal.show();
    };
    $scope.closeModal = function (card) {
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

    //show modal on navbar button tap
    $scope.showModal = function () {
        //clear modal's, model
        //otherwise we would allways change the same model
        //and send the reference to the same model to createCard button tap
        $scope.card = {};
        $scope.scrumCardModal.show()
    };

    //button tap event from popup-scrumCard.html
    $scope.createCard = function (card) {
        //add card to todo page
        $scope.cards.push(card);
        $scope.scrumCardModal.hide();
    };

    //move card to another page
    $scope.moveCard = function ($index) {
        createMovePopup($scope, $index);
    };
           
});
