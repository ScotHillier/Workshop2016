import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ProductService } from './product.service';

@Component({
    templateUrl: "/app/templates/product.html",
    providers: [ProductService]
})

export class ProductComponent {

    categoryName: string;
    products1: Array<any>;
    products2: Array<any>;
    products3: Array<any>;
    categories: Array<any>;

    productService:ProductService;

    constructor(ps: ProductService) {
        this.productService = ps;
        this.categoryName = "Beverages";
    }

    subscribeToProducts() {
        this.productService.getProducts().subscribe(
            products => { this.products1 = products; },
            err => { console.error(err); },
            () => { console.info('completed getProducts'); }
        );
    }

    subscribeToParallel() {
        this.productService.getCategoriesAndProducts().subscribe(
            results => {
                this.categories = results[0];
                this.products2 = results[1];
            },
            err => { console.error(err); },
            () => { console.info('completed getCategoriesAndProducts'); }
        );
    }

    subscribeToSequential() {
        this.productService.getProductsByCategoryName(this.categoryName).subscribe(
            products => { this.products3 = products; },
            err => { console.error(err); },
            () => { console.info('completed getProductsByCategoryName'); }
        );
    }

}