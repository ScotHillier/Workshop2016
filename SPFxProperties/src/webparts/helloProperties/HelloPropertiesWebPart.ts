/*
  1. Import the field types you want to use from @microsoft/sp-client-preview
  2. Update IHelloPropertiesWebPartProps to include a member for each new property
  3. (optional) Update en-us.js and mystrings.d.ts for any local strings you want to use
  4. Update propertyPaneSettings() to define pages, groups, and controls
  5. Update IHelloPropertiesWebPart.manifest.json to define default values
  6. Update render() to display the property values
*/

// Step 1: import types to support property fields
import {
    BaseClientSideWebPart,
    IPropertyPaneSettings,
    IWebPartContext,
    PropertyPaneTextField, 
    PropertyPaneCheckbox,
    PropertyPaneLabel,
    PropertyPaneLink,
    PropertyPaneSlider,
    PropertyPaneToggle,
    PropertyPaneDropdown
} from '@microsoft/sp-client-preview';

import styles from './HelloProperties.module.scss';
import * as strings from 'helloPropertiesStrings';
import { IHelloPropertiesWebPartProps } from './IHelloPropertiesWebPartProps';

export default class HelloPropertiesWebPart
    extends BaseClientSideWebPart<IHelloPropertiesWebPartProps> {

    public constructor(context: IWebPartContext) {
        super(context);
    }

    // Step 5: use property values when part is rendered
    public render(): void {
        this.domElement.innerHTML = `
      <div class="${styles.helloProperties}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Properties!</span>
              <p class="ms-font-l ms-fontColor-white">Use this web part to investigate properties</p>
                <div class="ms-Grid">
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Single Line of Text
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.myTextProperty}
                            </div>
                        </div>
                    </div>
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Checkbox
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.myCheckboxProperty}
                            </div>
                        </div>
                    </div>
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Read-Only Label
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.myLabelProperty}
                            </div>
                        </div>
                    </div
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Hyperlink
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.myLinkProperty}
                            </div>
                        </div>
                    </div>
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Slider
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.mySliderProperty}
                            </div>
                        </div>
                    </div>
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Toggle
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.myToggleProperty}
                            </div>
                        </div>
                    </div>
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                            <div class="ms-font-m ms-fontWeight-semibold ms-fontColor-white">
                                Drop-down list
                            </div>
                        </div>
                        <div class="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white">
                            <div class="ms-font-m">
                                ${this.properties.myDropdownProperty}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>`;
    }

    // Step 4: define pages, groups, and properties
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
                                PropertyPaneTextField('myTextProperty', {
                                    label: strings.TextFieldLabel
                                }),
                                PropertyPaneCheckbox('myCheckboxProperty', {
                                    text: strings.CheckboxFieldLabel
                                }),
                                PropertyPaneLabel('myLabelProperty', {
                                    text: strings.LabelFieldLabel
                                })
                            ]
                        },
                        {
                            groupName: strings.AdvancedGroupName,
                            groupFields: [
                                PropertyPaneLink('myLinkProperty', {
                                    text: strings.LinkFieldText,
                                    href: strings.LinkFieldUrl
                                }),
                                PropertyPaneSlider('mySliderProperty', {
                                    label: strings.SliderFieldLabel,
                                    step: 1,
                                    min: 1,
                                    max: 10
                                }),
                                PropertyPaneToggle('myToggleProperty', {
                                    label: strings.ToggleFieldLabel,
                                    onText: "On!",
                                    offText: "Off!"
                                }),
                                PropertyPaneDropdown('myDropdownProperty', {
                                    label: strings.DropdownFieldLabel,
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
