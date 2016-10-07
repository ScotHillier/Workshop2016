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
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return [
            {
                "ProductID": 1,
                "ProductName": "Chai",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "10 boxes x 20 bags",
                "UnitPrice": 18.0000,
                "UnitsInStock": 39,
                "UnitsOnOrder": 0,
                "ReorderLevel": 10,
                "Discontinued": false
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "24 - 12 oz bottles",
                "UnitPrice": 19.0000,
                "UnitsInStock": 17,
                "UnitsOnOrder": 40,
                "ReorderLevel": 25,
                "Discontinued": false
            },
            {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "SupplierID": 1,
                "CategoryID": 2,
                "QuantityPerUnit": "12 - 550 ml bottles",
                "UnitPrice": 10.0000,
                "UnitsInStock": 13,
                "UnitsOnOrder": 70,
                "ReorderLevel": 25,
                "Discontinued": false
            },
            {
                "ProductID": 4,
                "ProductName": "Chef Anton's Cajun Seasoning",
                "SupplierID": 2,
                "CategoryID": 2,
                "QuantityPerUnit": "48 - 6 oz jars",
                "UnitPrice": 22.0000,
                "UnitsInStock": 53,
                "UnitsOnOrder": 0,
                "ReorderLevel": 0,
                "Discontinued": false
            },
            {
                "ProductID": 5,
                "ProductName": "Chef Anton's Gumbo Mix",
                "SupplierID": 2,
                "CategoryID": 2,
                "QuantityPerUnit": "36 boxes",
                "UnitPrice": 21.3500,
                "UnitsInStock": 0,
                "UnitsOnOrder": 0,
                "ReorderLevel": 0,
                "Discontinued": true
            }
        ];
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map