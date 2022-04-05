import * as ActionTypes from './ActionTypes';
export const addItems = (data) => ({
    type: ActionTypes.Add,
    payload: data
})

export const removeItems = (data) => ({
    type: ActionTypes.Remove,
    payload: data
})