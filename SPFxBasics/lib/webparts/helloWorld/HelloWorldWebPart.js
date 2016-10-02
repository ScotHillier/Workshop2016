"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_client_preview_1 = require('@microsoft/sp-client-preview');
var HelloWorld_module_scss_1 = require('./HelloWorld.module.scss');
var strings = require('helloWorldStrings');
var HelloWorldWebPart = (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart(context) {
        _super.call(this, context);
    }
    HelloWorldWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + HelloWorld_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + HelloWorld_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + HelloWorld_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Welcome to SharePoint!</span>\n              <p class=\"ms-font-l ms-fontColor-white\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"ms-font-l ms-fontColor-white\">" + this.properties.description + "</p>\n              <a href=\"https://github.com/SharePoint/sp-dev-docs/wiki\" class=\"ms-Button " + HelloWorld_module_scss_1.default.button + "\">\n                <span class=\"ms-Button-label\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "propertyPaneSettings", {
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
                                    sp_client_preview_1.PropertyPaneTextField('description', {
                                        label: strings.DescriptionFieldLabel
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
    return HelloWorldWebPart;
}(sp_client_preview_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloWorldWebPart;

//# sourceMappingURL=HelloWorldWebPart.js.map
