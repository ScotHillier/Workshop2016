"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//polyfills
require('core-js/client/shim');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
//ng2
require('rxjs/Subject');
require('rxjs/Observable');
require('@angular/common');
require('@angular/compiler');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//spfx
var sp_client_preview_1 = require('@microsoft/sp-client-preview');
var strings = require('spFxSharePointStrings');
//custom
var app_module_1 = require('./app.module');
var SpFxSharePointWebPart = (function (_super) {
    __extends(SpFxSharePointWebPart, _super);
    function SpFxSharePointWebPart(context) {
        _super.call(this, context);
        //inject the app element
        var appElement = document.createElement('app-main');
        this.domElement.appendChild(appElement);
    }
    SpFxSharePointWebPart.prototype.render = function () {
        //bootstrap the module and pass the SharePoint context
        var platform = platform_browser_dynamic_1.platformBrowserDynamic([{ provide: 'SPContext', useValue: this.context }]);
        platform.bootstrapModule(app_module_1.AppModule);
    };
    Object.defineProperty(SpFxSharePointWebPart.prototype, "propertyPaneSettings", {
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
    return SpFxSharePointWebPart;
}(sp_client_preview_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpFxSharePointWebPart;

//# sourceMappingURL=SpFxSharePointWebPart.js.map
