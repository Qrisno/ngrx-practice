import { createAction, createActionGroup, props } from '@ngrx/store';


const INIT = '[INIT] Initialized App'


export const testActionGroup = createActionGroup({
    source: 'INIT',
    events: {
        init: props<{ init: string }>(),
        bayayi: props<{bayayi:number}>(),
        success: props<{ success: string }>()
    }
})



// We need to write actions upfront to have a clear understanding of what we are going to do in the application.
// we need to write as many as we can since they are inexpensive to write and they are the building blocks of the application.
// we should categorize actions for clarity and maintainability.
// we should name them not what they are doing but rather the process that is happing. for instance login, logout, add, remove, update, etc.

