function createMovePopup(scope, index, currentPageId) {

    var scopeCtrl = scope;

    function showPopup() {
        scopeCtrl.ionicPopup.show({
            templateUrl: 'app/Template/popup-move.html',
            title: "Move card",
            scope: scopeCtrl,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Move</b>',
                    type: 'button-light',
                    // ionic popup always calls then function
                    // so we return a value and handle the rest in then fcn
                    // outherwise btn tap would be caled two times
                    onTap: function (e) {

                        //action object
                        var pageId = {
                            'todo': function () {
                                return scopeCtrl.cards;
                            },

                            'progress': function () {
                                return scopeCtrl.progressArray;
                            },

                            'done': function () {
                                return scopeCtrl.doneArray;
                            },

                            undefined: function () {
                                return false;
                            }
                        };
                        //send object to then if !falsy
                        return typeof pageId[scopeCtrl.move.pageId] === 'function' ? {
                            'GoTo': pageId[scopeCtrl.move.pageId](),
                            'From': pageId[currentPageId]()
                        } : false;

                    }
                }]

        }).then(function (object) {
            //if not falsy move carde
            object && (
            object.GoTo.push(object.From[index]),
            object.From.splice(index, 1)
            )
        });
    }

    return showPopup();

};
