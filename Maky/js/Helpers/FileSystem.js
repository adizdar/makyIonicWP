var FileSystemCls = function () {

    //DEAFULT: window.loaclStorage
    return {
        'saveToFileSystem': function (fileName, content) {

            WinJS.Application.local.exists(fileName+'.json').done(function (isExist) {
                if (isExist) {
                    //file exists write content
                    WinJS.Application.local.folder.getFileAsync(fileName + ".json").then(function (file) {
                        Windows.Storage.FileIO.readTextAsync(file).then(function (object) {
                            Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(content));
                        });
                    });
                } else { //file doesn't exist, create
                    WinJS.Application.local.folder.createFileAsync(fileName + '.json', Windows.Storage.CreationCollisionOption.generateUniqueName).then(
                        function (file) {
                            return Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(content));
                        });
                }
            });

        },

        'loadFromFileSystem': function (fileName) {
            return new WinJS.Promise(function (complete, error) {
                WinJS.Application.local.folder.getFileAsync(fileName + '.json').then(function (file) {
                    return Windows.Storage.FileIO.readTextAsync(file);
                }).done(function (data) {
                    //if data is empty return null
                    complete(data ? JSON.parse(data) : null);
                });
            });
        },

        'writeToFile': function (fileName, content) {
            WinJS.Application.local.folder.getFileAsync(fileName + ".json").then(function (file) {
                Windows.Storage.FileIO.readTextAsync(file).then(function (text) {
                    //if data is saved for first time create array, else give back data
                    var parsedObject = (text !== '' && text) ? JSON.parse(text) : [];
                    
                    if(fileName === 'Projects' && parsedObject.indexOf(content) === -1)
                        parsedObject.push(content);

                    Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(parsedObject));
                });
            })
        }

    };

};

//*****EXAMPLE intalled location save and load
//Windows.ApplicationModel.Package.current.installedLocation.getFolderAsync('Indexed').done(function (folder) {
//    folder.createFileAsync(fileName, Windows.Storage.CreationCollisionOption.replaceExisting).then(
//function (file) {
//    console.log(file);
//    return Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(content));
//});

//    Windows.ApplicationModel.Package.current.installedLocation.getFolderAsync('Indexed').done(function (folder) {
//        folder.getFileAsync(globalTest + ".txt").then(function (file) {
//            return Windows.Storage.FileIO.readTextAsync(file);
//        }).done(function (data) {
//            console.log(data);
//        });
//    });