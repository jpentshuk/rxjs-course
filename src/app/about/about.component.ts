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
  ReplaySubject, Subscription
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public sub: Subscription;

    ngOnInit() {
      const click$ = fromEvent(document, 'click');
      click$.subscribe(
        evt => console.log(evt),
        err => console.log(err),    // error logic here
        () => console.log('completed')   // when stream ends, that logic here

        // Observable always ends or gives an error.
        // It never return to emit values again
      );

      // to unsubscribe Observable, we need to call unsubscribe method that can only be called
      // from Subscription type
      const interval$ = timer(3000, 1000);
      this.sub = interval$.subscribe(val => console.log('stream 1 => ' + val));
      setTimeout(() => this.sub.unsubscribe(), 5000);
      // so starts after 3 seconds, ends after 5 seconds
    }
}






