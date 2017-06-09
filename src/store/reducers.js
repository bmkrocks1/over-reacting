import { ActionType } from '../constants';

export const card = (state = {}, action) => {
    switch (action.type) {
        case ActionType.ADD_CARD:
            return {
                id: action.id,
                title: action.title,
                color: action.color
            };
        case ActionType.EDIT_CARD_TITLE:
            return {
                ...state,
                title: action.title
            }
        case ActionType.EDIT_CARD_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
};

export const cards = (state = [], action) => {
    switch (action.type) {
        case ActionType.ADD_CARD:
            return [...state, card({}, action)];
        case ActionType.EDIT_CARD_TITLE:
        case ActionType.EDIT_CARD_COLOR:
            return state.map(c =>
                c.id === action.id ? card(c, action) : c
            );
        case ActionType.REMOVE_CARD:
            return state.filter(c =>
                c.id !== action.id
            );
        default:
            return state;
    }
};