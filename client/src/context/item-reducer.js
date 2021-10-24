import {
    ADD_ITEM,
    TOGGLE_STATUS,
    DELETE_ITEM,
    GET_ITEMS
} from './action-types';

import { v4 as uuidv4 } from 'uuid';

const itemReducer = (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items : action.payload
            }
        case ADD_ITEM:
            return {
                items: [...state.items, {
                    id: uuidv4(),
                    title: action.payload.text,
                    done: false
                }]
            };
        case TOGGLE_STATUS:
            return {
                items: state.items.map(x => x.id !== action.payload.id ? x : {
                    ...x,
                    done: !x.done
                })
            };
        case DELETE_ITEM:
            return {
                items: state.items.filter(x => x.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export default itemReducer