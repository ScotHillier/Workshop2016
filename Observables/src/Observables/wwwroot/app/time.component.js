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
var core_1 = require('@angular/core');
var time_service_1 = require('./time.service');
var TimeComponent = (function () {
    function TimeComponent(ts) {
        this.timeService = ts;
    }
    TimeComponent.prototype.subscribeToTime1 = function () {
        this.currentTime1 = this.timeService.getAsyncTime();
    };
    TimeComponent.prototype.subscribeToTime2 = function () {
        var _this = this;
        this.subscription = this.timeService.getAsyncTime().subscribe(function (data) { _this.currentTime2 = data; }, function (err) { console.error(err); }, function () { console.info('completed async time'); });
    };
    TimeComponent.prototype.cancelSubscription = function () {
        this.subscription.unsubscribe();
    };
    TimeComponent = __decorate([
        core_1.Component({
            templateUrl: "/app/templates/time.html",
            providers: [time_service_1.TimeService]
        }), 
        __metadata('design:paramtypes', [time_service_1.TimeService])
    ], TimeComponent);
    return TimeComponent;
}());
exports.TimeComponent = TimeComponent;
//# sourceMappingURL=time.component.js.map