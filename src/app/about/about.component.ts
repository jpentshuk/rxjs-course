import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
      const interval$ = interval(1000); // its definition of stream of values as known as Observable

      // we need to subscribe to make stream of values

      interval$.subscribe(val => console.log('stream 1 =>  ' + val));
      interval$.subscribe(val => console.log('stream 2 =>  ' + val));

      // wait 3 seconds and then start to emit values each second
      const intervalAfterSomeTime$ = timer(3000, 1000);
      intervalAfterSomeTime$.subscribe(val => console.log('stream 1 after 3 secs ' + val));

      // click streams
      const click$ = fromEvent(document, 'click');
      click$.subscribe(evt => console.log(evt));
    }
}






