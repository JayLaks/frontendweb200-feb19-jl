import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as actions from '../actions/todos.actions';


@Injectable()
export class TodosEffects {

  @Effect({ dispatch: false }) updateTheApi$ = this.actions$
    .pipe(
      ofType(actions.ADD_TODO),
      map(a => a as actions.TodoAdded),
      switchMap(action => this.http.post('http://localhost:3000/todos', action.payload))
      // tap(x => console.log(x))
    );
  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
