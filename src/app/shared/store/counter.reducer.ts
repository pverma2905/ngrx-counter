import { createReducer, on } from "@ngrx/store"
import { changechannelname, customincrement, decrement, increment, reset } from "./counter.actions"
import { initialState } from "./counter.state"


const _counterReducer = createReducer(
    initialState,
    on(increment,(state)=>{
        // console.log("mm",state)
     return {
        ...state,
        count:state.count+1
     }
    }),
    on(decrement,(state)=>{
     return {
        ...state,
        count:state.count-1
     }
    }),
    on(reset,(state)=>{
     return {
        ...state,
        count:0
     }
    }),
    on(customincrement,(state,action)=>{
     return {
        ...state,
        count:action.action=="add"?state.count+action.value:state.count-action.value
     }
    }),
    on(changechannelname,(state,action)=>{
     return {
        ...state,
        channelname:action.channel
     }
    }),
)

export function counterReducer(state:any, action:any){
    return _counterReducer(state,action)
}