﻿import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor() {
    }

    getProducts(): any {

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

    }

}