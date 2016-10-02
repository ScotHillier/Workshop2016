import { ISPListItem } from './ISPListItem';
import { MockList } from './mock.list';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    private listUrl: string = "https://[YOUR SHAREPOINT SITE]/_api/web/lists/getByTitle('Announcements')/items?$select=Id,Title";
    private httpService: Http;

    constructor(http: Http) {
        this.httpService = http;
    }

    public getItems(): Observable<any> {

        return this.httpService.get(this.listUrl, {
            headers: new Headers(
                {
                    "Accept": "application/json"
                }
            )
        }).map((res: Response) => {
            return res.json().value;
        });

    }

    public getMockItems(): Observable<ISPListItem[]> {
        return Observable.create(observer => {
            observer.next(MockList.get(this.listUrl));
        });
    }
}