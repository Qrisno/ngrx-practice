import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";

@Injectable()
export class TestEffects {
    
  constructor(private actions$: Actions) {}

  init$ = createEffect(() => this.actions$.pipe(
    ofType('[INIT] init'),
    tap(() => console.log('INIT')),
    map(() => ({ type: '[INIT] success', success: 'success' }))
  ));

  bayayi$ = createEffect(() => this.actions$.pipe(
    ofType('[INIT] bayayi'),
    tap(() => console.log('INIT')),
    map(() => ({ type: '[INIT] bayayi Success' }))
  ));
}