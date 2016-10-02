import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { TimeService } from './time.service';

@Component({
    templateUrl: "/app/templates/time.html",
    providers: [TimeService]
})

export class TimeComponent {

    timeService: TimeService;
    subscription: Subscription;
    currentTime1: Observable<string>;
    currentTime2: string;

    constructor(ts: TimeService) {
        this.timeService = ts;
    }

    subscribeToTime1() {
        this.currentTime1 = this.timeService.getAsyncTime();
    }

    subscribeToTime2() {
        this.subscription = this.timeService.getAsyncTime().subscribe(
            data => { this.currentTime2 = data; },
            err => { console.error(err); },
            () => { console.info('completed async time'); }
        );
    }

    cancelSubscription() {
        this.subscription.unsubscribe();
    }
}