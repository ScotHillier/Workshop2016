import { BaseClientSideWebPart, IPropertyPaneSettings, IWebPartContext } from '@microsoft/sp-client-preview';
import { ISpFxSharePointWebPartProps } from './ISpFxSharePointWebPartProps';
export default class SpFxSharePointWebPart extends BaseClientSideWebPart<ISpFxSharePointWebPartProps> {
    constructor(context: IWebPartContext);
    render(): void;
    protected propertyPaneSettings: IPropertyPaneSettings;
}
