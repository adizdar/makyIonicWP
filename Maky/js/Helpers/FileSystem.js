var FileSystemCls = function () {

    //DEAFULT: window.loaclStorage
    return {
        'saveToFileSystem': function (fileName, content) {
            WinJS.Application.local.folder.createFileAsync(fileName, Windows.Storage.CreationCollisionOption.replaceExisting).then(
                function (file) {
                    console.log(file);
                    return Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(content));
                });
        },

        'loadFromFileSystem': function (fileName, object) {
            WinJS.Application.local.folder.getFileAsync(globalTest + ".txt").then(function (file) {
                return Windows.Storage.FileIO.readTextAsync(file);
            }).done(function (data) {
                console.log(data);
            });
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