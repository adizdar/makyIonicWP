function createMovePopup(scope, index) {

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
                    onTap: function (e) {
                        // ionic popup always calls then function
                        // so we return a value and handle the rest in then fcn
                        // outherwise btn tap would be caled two times
                        if (scopeCtrl.move.pageId === 'progress' && index !== undefined) 
                            return scopeCtrl.progressArray;
                        return false;
                  
                    }
                }]

        }).then(function (array) {
            array && (
            array.push(scopeCtrl.cards[index]),
            scopeCtrl.cards.splice(index, 1)
            )
        });
    }

    return showPopup();

};
