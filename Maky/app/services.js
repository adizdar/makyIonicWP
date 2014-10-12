//service for fileNames, so the use can on load choos file to load
//custom picker***EXAMPLE

angular.module('maky.services', [])
.factory('LocationService', function () {
    var _locations = [];

    return {
        'set': function (location) {
            _locations.push(location);
        },

        'get' :function () {
            return _locations;
        }
    }
});

