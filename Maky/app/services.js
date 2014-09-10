angular.module('maky.services', [])

.factory('newCardService', function () {
    var _card = {};

    return {
        'set': function (card) {
            _card =  card;
        },

        'get' :function () {
            return _card;
        }

    }
   
});

function callBack(card) {
    return function () {
        return card;
    };


};
