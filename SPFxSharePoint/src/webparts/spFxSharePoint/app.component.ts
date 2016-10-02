import { Component, Inject } from '@angular/core';
import { IWebPartContext } from '@microsoft/sp-client-preview';
import { ListService } from './service.list';
import { ISPListItem } from './ISPListItem';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-main',
    templateUrl: 'https://surfacebook:4321/src/webparts/spFxSharePoint/templates/component.html',
    styleUrls: ['https://surfacebook:4321/src/webparts/spFxSharePoint/templates/fabric.css'],
    providers: [ListService]
})
export class AppComponent {

    public webTitle: string; 
    private subscription: Subscription;
    private listService: ListService;
    public listItems: ISPListItem[];

    constructor(
        @Inject('SPContext') public context: IWebPartContext,
        ls: ListService) {

        //get the web title from the SharePoint context
        this.webTitle = context.pageContext.web.title;

        //get the list Service
        this.listService = ls;
    }

    public getListItems() {
        if (this.webTitle === 'Local Workbench') {
            this.subscription = this.listService.getMockItems().subscribe(
                data => { this.listItems = data; },
                err => { console.error(err); },
                () => { console.info('Got mock list items!'); }
            );
        }
        else {
            this.subscription = this.listService.getItems().subscribe(
                data => { this.listItems = data; },
                err => { console.error(err); },
                () => { console.info('Got real list items!'); }
            );
        }
    }

}