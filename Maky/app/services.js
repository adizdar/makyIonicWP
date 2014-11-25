//service for fileNames, so the use can on load choos file to load
//custom picker***EXAMPLE

angular.module('maky.services', [])
.factory('observerFactory', function ($rootScope) {
    var _data = {};

    return {
        'set': function (key, value) {
            _data[key] = value;
        },
        'get' :function (key) {
            return _data[key] ? _data[key] : null;
        },
        
        'getAll': function () {
            return _data ? _data : null;
        },

        'delete': function (array) {
            var length = array.length;

            for (var i = 0; i < length; i++)
                delete _data[array[i]];
        }
    }
});

