import { ADD_ITEM, TOGGLE_STATUS, DELETE_ITEM } from './action-types';

const itemReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM: return { items: [...state.items, { id: state.items[state.items.length - 1].id + 1, title: action.payload.text, done: false }] };
        case TOGGLE_STATUS: return { items: state.items.map(x => x.id !== action.payload.id ? x : { ...x, done: !x.done }) };
        case DELETE_ITEM: return { items: state.items.filter(x => x.id !== action.payload.id) };
        default: return state;
    }
}

export default itemReducer