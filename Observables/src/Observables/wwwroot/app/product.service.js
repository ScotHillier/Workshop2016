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
var Observable_1 = require('rxjs/Observable');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/observable/forkJoin');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
var ProductService = (function () {
    function ProductService(http) {
        this.httpService = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5", {
            headers: new http_1.Headers({
                "Accept": "application/json"
            })
        }).map(function (res) {
            return res.json().value;
        });
    };
    ProductService.prototype.getCategoriesAndProducts = function () {
        return Observable_1.Observable.forkJoin(this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories?$top=5").map(function (res) { return res.json().value; }), this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5").map(function (res) { return res.json().value; }));
    };
    ProductService.prototype.getProductsByCategoryName = function (categoryName) {
        var _this = this;
        return this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories")
            .map(function (res) {
            var categories = res.json().value;
            var categoryId;
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].CategoryName === categoryName) {
                    categoryId = categories[i].CategoryID;
                }
            }
            return categoryId;
        })
            .flatMap(function (catId) {
            return _this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories(" + catId + ")/Products?$top=5").map(function (res) { return res.json().value; });
        });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map