import { BaseClientSideWebPart, IPropertyPaneSettings, IWebPartContext } from '@microsoft/sp-client-preview';
import { IHelloWorldWebPartProps } from './IHelloWorldWebPartProps';
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    constructor(context: IWebPartContext);
    render(): void;
    protected propertyPaneSettings: IPropertyPaneSettings;
}
