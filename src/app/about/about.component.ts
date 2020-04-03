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
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
      // making custom observable - whats happening under the hood of Observable
      // thats output is Observable
      const http$ = Observable.create(observer => {     // instead of create we could use 'new Observable'
        fetch('/api/courses').then(response => {
          return response.json();
        }).then(body => {
          observer.next(body);
          observer.complete();
        }).catch(err =>  {
          observer.error(err);
        });
      });
      http$.subscribe(
        courses => console.log(courses), // its object, that contains payload
        noop, // noop operation stands for () => {}
        ()=> console.log('completed')
      );


    }
}






