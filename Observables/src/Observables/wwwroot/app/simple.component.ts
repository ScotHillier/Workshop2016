import {Component} from '@angular/core'
import {SimpleService} from './simple.service'

@Component({
    templateUrl: '/app/templates/simple.html',
    providers: [SimpleService]
})

export class SimpleComponent {

    welcomeMessage: string;

    constructor(simpleService: SimpleService) {
        this.welcomeMessage = simpleService.getMessage();
    }

}