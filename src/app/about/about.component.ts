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
  ReplaySubject, Subscription, Observer
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from "../common/util";


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    const http$ = createHttpObservable('/api/courses');

    const courses$ = http$
      .pipe(     // chain operator
        map(res => Object.values(res['payload']))   // we are mapping as object values from initial object, which has data on 'payload' prop
      );

    // so we are getting new Observable from initial http$

    courses$.subscribe(
      courses => console.log(courses),
      noop,
      ()=> console.log('completed')
    );
  }
}






