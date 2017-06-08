import C from '../constants';

export const card = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_CARD:
            return {
                id: action.id,
                title: action.title,
                color: action.color
            };
        case C.EDIT_CARD_TITLE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state;
    }
};

export const cards = (state = [], action) => {
    switch (action.type) {
        case C.ADD_CARD:
            return [...state, card({}, action)];
        case C.EDIT_CARD_TITLE:
            return state.map(c =>
                c.id === action.id ? card(c, action) : c
            );
        default:
            return state;
    }
};