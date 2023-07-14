import { createAction, createReducer, on } from "@ngrx/store";
import { User } from "../user";



export const userReducer = createReducer(
    { maskUserName: true },
    on(createAction('[User] Mask User Name'), state => {
        console.log('user checkbox original state: ' + JSON.stringify(state));
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)