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
      document.addEventListener('click', evt => {
        console.log(evt);
        setTimeout(()=> {
          console.log('finished');
          let counter = 0;
          setInterval(() => {
            console.log(counter);
            counter++;
          }, 1000);
        }, 3000);
      });
      // so yes
      // streams are basically all those: setTimeouts, setIntervals, HTTP requests, because those all are asyncronous

      // so its nested - so called callback hell, and there Rxjs comes handy
      // Rxjs - reactive extensions for javascript
    }
}






