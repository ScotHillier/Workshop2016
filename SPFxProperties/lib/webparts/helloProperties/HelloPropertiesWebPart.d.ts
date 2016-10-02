import { BaseClientSideWebPart, IPropertyPaneSettings, IWebPartContext } from '@microsoft/sp-client-preview';
import { IHelloPropertiesWebPartProps } from './IHelloPropertiesWebPartProps';
export default class HelloPropertiesWebPart extends BaseClientSideWebPart<IHelloPropertiesWebPartProps> {
    constructor(context: IWebPartContext);
    render(): void;
    protected propertyPaneSettings: IPropertyPaneSettings;
}
