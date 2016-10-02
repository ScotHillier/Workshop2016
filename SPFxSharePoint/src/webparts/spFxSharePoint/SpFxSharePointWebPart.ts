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
import * as strings from 'spFxSharePointStrings';
import { ISpFxSharePointWebPartProps } from './ISpFxSharePointWebPartProps';

//custom
import { AppModule } from './app.module';

export default class SpFxSharePointWebPart extends BaseClientSideWebPart<ISpFxSharePointWebPartProps> {

    public constructor(context: IWebPartContext) {
        super(context);

        //inject the app element
        const appElement: HTMLElement = document.createElement('app-main');
        this.domElement.appendChild(appElement);

    }

    public render(): void {

        //bootstrap the module and pass the SharePoint context
        const platform = platformBrowserDynamic([{ provide: 'SPContext', useValue: this.context }]);
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

