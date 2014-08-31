angular.module('maky.services', [])

.factory('newCardService', function () {
    var _card = [];

    return {

        setCard: function (card) {
            _card.push(card);
        },

        getCard: function () {
            return _card;
        }
    };

});
