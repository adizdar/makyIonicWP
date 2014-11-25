angular.module('maky.controllers')

.controller('ProjectCtrl', function ($scope, $ionicPopup, $ionicModal, $state, observerFactory) {
    
    //to cach popUp input model, by default it is data.response
    $scope.data = {};
    $scope.move = {};

    //start array, elements go first to to todo page
    //we send back items to cards when we want cards back on todo page
    $scope.cards = [];

    //arrays for individual pages
    $scope.progressArray = [];
    $scope.doneArray = [];
    $scope.ionicPopup = $ionicPopup;

    /****Listeners****/
    //show popup on page initialization
    $scope.init = function () {
        
        //if project is loaded, bind data and disable name popup
        if (observerFactory.get('loadProjectData') && observerFactory.get('loadProjectTitle')) {
            var object = observerFactory.get('loadProjectData');

            $scope.projectTitle = observerFactory.get('loadProjectTitle');
            $scope.cards = object.todo;
            $scope.progressArray = object.progress;
            $scope.doneArray = object.done;

            observerFactory.delete(['loadProjectData', 'loadProjectTitle']);
            return;
        }

        //project name popup
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

    //on Page leave listener (...on state change)
    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        var fileSystem = FileSystemCls();
        var content = {};

        //marge all scrum cards in one object, so we can save it 
        content.todo = $scope.cards;
        content.done = $scope.doneArray;
        content.progress = $scope.progressArray;

        fileSystem.saveToFileSystem($scope.projectTitle, content);
        fileSystem.writeToFile('Projects', $scope.projectTitle);
    });


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
    
    /*******Functions*******/
    //back button
    $scope.goBack = function () {
        $state.go('home');
    };

    //show modal on navbar button tap
    $scope.showModal = function () {
        //clear modal's, model
        //otherwise we would allways change the same model
        //and send the reference to the same model to createCard button tap
        $scope.card = {};
        $scope.scrumCardModal.show();
    };

    //button tap event from popup-scrumCard.html
    $scope.createCard = function (card) {
        //add card to todo page
        $scope.cards.push(card);
        $scope.scrumCardModal.hide();
    };

    //move card to another page
    $scope.moveCard = function ($index) {
        createMovePopup($scope, $index, 'todo');
    };

});
