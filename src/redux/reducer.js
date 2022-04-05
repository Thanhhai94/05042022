import * as ActionTypes from './ActionTypes';

const initState = []
const List = (state = initState, action) => {
    console.log({state,action})
    switch(action.type) {
        case ActionTypes.Add:
            return [...state, action.payload]
        case ActionTypes.Remove:
            const newState = state.filter(e=> e.id !== action.payload)
            console.log(action.payload)
            console.log(newState)
            return (state = newState)
        default:
            return state
    }
}

export default List