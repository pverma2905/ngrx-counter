import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.state";


const getcounterstate=createFeatureSelector<CounterModel>('counter');

export const getcounter=createSelector(getcounterstate,(state)=>{
    return state.count;
})

export const getchannelname=createSelector(getcounterstate,(state)=>{
    return state.channelname;
})
