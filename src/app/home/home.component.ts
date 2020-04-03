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

  public beginnersCourses: Course[];
  public advancedCourses: Course[];


    ngOnInit() {

      const http$ = createHttpObservable('/api/courses');

      const courses$ = http$
        .pipe(
          map(res => Object.values(res['payload']))
        );


      courses$.subscribe(
        courses => {
          this.beginnersCourses = courses.filter(course => {
            return course.category === 'BEGINNER'
          });
          this.advancedCourses = courses.filter(course => {
            return course.category === 'ADVANCED';
          })
        },
        noop,
        ()=> console.log('completed')
      );

      // note: that so-called imperative design, but we should avoid to use logic in subscribe methods

    }

}
