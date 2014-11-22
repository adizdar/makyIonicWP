// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=329104

var projectTitles = function () {
    var _projects = {};
    return {
        'get': function () {
            return _projects;
        },
        'set': function (object) {
            _projects = object;
        }
    }
};

(function () {
    "use strict";
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

                WinJS.Application.local.exists('Projects.json').done(function (isExist) {
                    if (isExist) {
                        // file exists, load data from Projects.json
                        var fs = FileSystemCls();
                        var loadPromise = fs.loadFromFileSystem('Projects');

                        loadPromise.then(function (data) {
                            debugger;
                        });
                    }
                    else {
                        // file does not exist, create Projects.json file 
                        WinJS.Application.local.folder.createFileAsync('Projects.json', Windows.Storage.CreationCollisionOption.failIfExists);
                    }
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


