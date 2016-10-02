import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'

export class TimeService {

    constructor() {
    }

    getAsyncTime(): Observable<string> {

        return Observable.create(observer => { //create Observable

            var count = 0;

            var id = setInterval(() => {       //set up timer
                try {

                    count++;
                    if (count > 10) {
                        observer.complete();   //complete after 10 values
                        clearInterval(id);
                    }
                    else {
                        var d = new Date();    //emit next value
                        observer.next(this.pad(d.getHours()) + ":" + this.pad(d.getMinutes()) + ":" + this.pad(d.getSeconds()));
                    }
                }
                catch (err) {
                    observer.error(err);       //emit error
                }

            }, 1000);

            return function () {               //dispose function
                clearInterval(id);
            }

        });

    }

    pad(inString): string {
        return inString < 10 ? ("0" + inString) : inString;
    }


}