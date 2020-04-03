import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Store} from '../common/store.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public beginnersCourses$: Observable<Course[]>;
  public advancedCourses$:  Observable<Course[]>;


    ngOnInit() {

      const http$ = createHttpObservable('/api/courses');

      const courses$: Observable<Course[]> = http$
        .pipe(
          tap(()=> console.log('executed')), // tap is for side effects
          map(res => Object.values(res['payload'])),
          shareReplay() // that operator wont allow to execute same request multiple times, so its shared for multiple
          // subscribers
        );

      this.beginnersCourses$ = courses$
        .pipe(
          map(courses => courses
            .filter(course => course.category === 'BEGINNER'))
        );
      this.advancedCourses$ = courses$
        .pipe(
          map(courses => courses
            .filter(course => course.category === 'ADVANCED'))
        );
    }

}
