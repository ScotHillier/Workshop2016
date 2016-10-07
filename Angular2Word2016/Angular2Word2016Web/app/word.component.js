"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var WordComponent = (function () {
    function WordComponent(ps) {
        this.productService = ps;
    }
    WordComponent.prototype.ngAfterViewChecked = function () {
        this.products = this.productService.getProducts();
    };
    WordComponent.prototype.insertHTML = function () {
        var that = this;
        Word.run(function (context) {
            var html = "\n\n                <style>\n                #productsTable\n                {\n\t                font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", Sans-Serif;\n\t                font-size: 12px;\n\t                background: #fff;\n\t                width: 480px;\n\t                border-collapse: collapse;\n\t                text-align: left;\n                }\n                #productsTable th\n                {\n\t                font-size: 18pt;\n\t                font-weight: normal;\n\t                color: #039;\n\t                border-bottom: 2px solid #6678b1;\n                }\n                #productsTable td\n                {\n\t                color: #669;\n                }\n                #productsTable tbody tr:hover td\n                {\n\t                color: #009;\n                }\n                </style>\n\n                <table id='productsTable'>\n                <thead><tr><th>Product Name</td><th>Unit Cost</td></tr></thead>\n                <tbody>";
            for (var x = 0; x < that.products.length - 1; x++) {
                html += "<tr><td>" + that.products[x].ProductName + "</td><td>" + that.products[x].UnitPrice + "</td></tr>";
            }
            html += '</tbody></table>';
            var range = context.document.getSelection();
            range.insertHtml(html, Word.InsertLocation.end);
            return context.sync().then(function () {
                that.message = 'Inserted the HTML!';
            });
        })
            .catch(function (error) {
            that.message = 'Error: ' + JSON.stringify(error);
        });
    };
    WordComponent = __decorate([
        core_1.Component({
            selector: 'word-app',
            templateUrl: "/app/taskpane.html",
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map