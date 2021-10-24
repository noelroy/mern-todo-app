import {
    ADD_ITEM,
    TOGGLE_STATUS,
    DELETE_ITEM,
    GET_ITEMS
} from './action-types';

const itemReducer = (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                loading : false,
                items : action.payload
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case TOGGLE_STATUS:
            return {
                ...state,
                items: state.items.map(x => x._id !== action.payload._id ? x : action.payload)
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(x => x._id !== action.payload)
            };
        default:
            return state;
    }
}

export default itemReducer