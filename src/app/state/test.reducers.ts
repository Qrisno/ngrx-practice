import { createReducer, on } from "@ngrx/store"
import { testActionGroup } from "./test.actions"



export const initialState: { init: string,bayayi:number, success: string } = { init: '', bayayi:0, success: '' }
export const testReducer = createReducer(
    initialState,
    on(testActionGroup.init, (state, { init }) => ({...state, init })),
    on(testActionGroup.bayayi, (state, { bayayi }) => ({...state, bayayi })),
    on(testActionGroup.success, (state, { success }) => ({...state, success })),
)