Office.initialize = function (reason) {
    //load the first module to launch the app
    ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(app.ExcelModule);
};
