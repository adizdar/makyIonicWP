// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=329104

//**GLOBAL FUNCTION
//Store file name's for custom picker
function locationStorage () {
    var _locations = [];

    return {
        'get': function () {
            return _locations;
        },
        'set': function (fileName) {
            _locations.push(fileName);
        }
    }
};

//create reference to function, otherwise we couldn't use closure effect of saving outer functions reference
var LocationStorage = locationStorage();

(function () {
    "use strict";
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here

                //create location file on start if created do nothing
                WinJS.Application.local.folder.getFileAsync('Location.txt').then(function (fileExists) {
                }, function (fileNotExist) {
                    WinJS.Application.local.folder.createFileAsync('Location.txt').done(function (file) {
                    });
                });

            }

            else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().

    };

    app.start();
})();


