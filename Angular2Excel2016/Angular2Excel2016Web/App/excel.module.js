(function (app) {
    //create a module to hold the main component
    app.ExcelModule =
      ng.core.NgModule({
          imports: [ng.platformBrowser.BrowserModule],
          declarations: [app.ExcelComponent],
          bootstrap: [app.ExcelComponent]
      })
      .Class({
          constructor: function () { }
      });
})(window.app || (window.app = {}));