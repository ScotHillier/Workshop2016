import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProductService {

    httpService: Http;

    constructor(http: Http) {
        this.httpService = http;
    }

    getProducts(): Observable<any> {

        return this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5", {
            headers: new Headers(
                {
                    "Accept": "application/json"
                }
            )
        }).map((res: Response) => {
            return res.json().value;
        });

    }

    getCategoriesAndProducts(): Observable<any> {

        return Observable.forkJoin(
            this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories?$top=5").map((res: Response) => res.json().value),
            this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=5").map((res: Response) => res.json().value)
        );

    }

    getProductsByCategoryName(categoryName: string): Observable<any> {

        return this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories")
            .map((res: Response) => {
                var categories = res.json().value;
                var categoryId: string;
                for (var i = 0; i < categories.length; i++) {
                    if (categories[i].CategoryName === categoryName) {
                        categoryId = categories[i].CategoryID;
                    }
                }
                return categoryId;
            })
            .flatMap((catId) => {
                return this.httpService.get("http://services.odata.org/V4/Northwind/Northwind.svc/Categories(" + catId + ")/Products?$top=5").map((res: Response) => res.json().value);
            });

    }

}