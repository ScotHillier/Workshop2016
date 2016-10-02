//polyfills
import 'core-js/client/shim';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

//ng2
import 'rxjs/Subject';
import 'rxjs/Observable';
import '@angular/common';
import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//spfx
import { BaseClientSideWebPart, IPropertyPaneSettings, IWebPartContext, PropertyPaneTextField } from '@microsoft/sp-client-preview';
import * as strings from 'helloNg2Strings';
import { IHelloNg2WebPartProps } from './IHelloNg2WebPartProps';

//custom
import { AppModule } from './app.module';

export default class MyFirstNgWebPartWebPart extends BaseClientSideWebPart<IHelloNg2WebPartProps> {

    public constructor(context: IWebPartContext) {
        super(context);

        //inject the app element
        const appElement: HTMLElement = document.createElement('app-main');
        this.domElement.appendChild(appElement);
    }

    public render(): void {

        //bootstrap the module
        const platform = platformBrowserDynamic();
        platform.bootstrapModule(AppModule);

    }

    protected get propertyPaneSettings(): IPropertyPaneSettings {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }

}
