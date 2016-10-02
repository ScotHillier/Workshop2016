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
var mock_list_1 = require('./mock.list');
var Observable_1 = require('rxjs/Observable');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ListService = (function () {
    function ListService(http) {
        this.listUrl = "https://a830edad9050849spdk3073.sharepoint.com/sites/appdev/spfx/_api/web/lists/getByTitle('Announcements')/items?$select=Id,Title";
        this.httpService = http;
    }
    ListService.prototype.getItems = function () {
        return this.httpService.get(this.listUrl, {
            headers: new http_1.Headers({
                "Accept": "application/json"
            })
        }).map(function (res) {
            return res.json().value;
        });
    };
    ListService.prototype.getMockItems = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(mock_list_1.MockList.get(_this.listUrl));
        });
    };
    ListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;

//# sourceMappingURL=service.list.js.map
