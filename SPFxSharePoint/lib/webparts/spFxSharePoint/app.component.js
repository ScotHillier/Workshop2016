"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var service_list_1 = require('./service.list');
var AppComponent = (function () {
    function AppComponent(context, ls) {
        this.context = context;
        //get the web title from the SharePoint context
        this.webTitle = context.pageContext.web.title;
        //get the list Service
        this.listService = ls;
    }
    AppComponent.prototype.getListItems = function () {
        var _this = this;
        if (this.webTitle === 'Local Workbench') {
            this.subscription = this.listService.getMockItems().subscribe(function (data) { _this.listItems = data; }, function (err) { console.error(err); }, function () { console.info('Got mock list items!'); });
        }
        else {
            this.subscription = this.listService.getItems().subscribe(function (data) { _this.listItems = data; }, function (err) { console.error(err); }, function () { console.info('Got real list items!'); });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: 'https://surfacebook:4321/src/webparts/spFxSharePoint/templates/component.html',
            styleUrls: ['https://surfacebook:4321/src/webparts/spFxSharePoint/templates/fabric.css'],
            providers: [service_list_1.ListService]
        }),
        __param(0, core_1.Inject('SPContext')), 
        __metadata('design:paramtypes', [Object, service_list_1.ListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
