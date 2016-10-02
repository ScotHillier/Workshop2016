"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_client_preview_1 = require('@microsoft/sp-client-preview');
var HelloProperties_module_scss_1 = require('./HelloProperties.module.scss');
var strings = require('helloPropertiesStrings');
var HelloPropertiesWebPart = (function (_super) {
    __extends(HelloPropertiesWebPart, _super);
    function HelloPropertiesWebPart(context) {
        _super.call(this, context);
    }
    HelloPropertiesWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + HelloProperties_module_scss_1.default.helloProperties + "\">\n        <div class=\"" + HelloProperties_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + HelloProperties_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Properties!</span>\n              <p class=\"ms-font-l ms-fontColor-white\">Use this web part to investigate properties</p>\n                <div class=\"ms-Grid\">\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Single Line of Text\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myTextProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Checkbox\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myCheckboxProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Read-Only Label\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myLabelProperty + "\n                            </div>\n                        </div>\n                    </div\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Hyperlink\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myLinkProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Slider\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.mySliderProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Toggle\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myToggleProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Drop-down list\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myDropdownProperty + "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(HelloPropertiesWebPart.prototype, "propertyPaneSettings", {
        get: function () {
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
                                    sp_client_preview_1.PropertyPaneTextField('myTextProperty', {
                                        label: strings.TextFieldLabel
                                    }),
                                    sp_client_preview_1.PropertyPaneCheckbox('myCheckboxProperty', {
                                        text: strings.CheckboxFieldLabel
                                    }),
                                    sp_client_preview_1.PropertyPaneLabel('myLabelProperty', {
                                        text: strings.LabelFieldLabel
                                    })
                                ]
                            },
                            {
                                groupName: strings.AdvancedGroupName,
                                groupFields: [
                                    sp_client_preview_1.PropertyPaneLink('myLinkProperty', {
                                        text: strings.LinkFieldText,
                                        href: strings.LinkFieldUrl
                                    }),
                                    sp_client_preview_1.PropertyPaneSlider('mySliderProperty', {
                                        label: strings.SliderFieldLabel,
                                        step: 1,
                                        min: 1,
                                        max: 10
                                    }),
                                    sp_client_preview_1.PropertyPaneToggle('myToggleProperty', {
                                        label: strings.ToggleFieldLabel,
                                        onText: "On!",
                                        offText: "Off!"
                                    }),
                                    sp_client_preview_1.PropertyPaneDropdown('myDropdownProperty', {
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
        },
        enumerable: true,
        configurable: true
    });
    return HelloPropertiesWebPart;
}(sp_client_preview_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloPropertiesWebPart;

//# sourceMappingURL=HelloPropertiesWebPart.js.map
