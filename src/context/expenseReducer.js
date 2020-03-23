import { ADD_EXPENSE, SET_LOADING } from "./types";

export default (state, action) => {
    switch(action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                history: [...state.history, action.payload],
                loading: false
            }
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                history: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}
