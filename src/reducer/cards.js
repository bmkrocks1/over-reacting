import { 
    CRUD_CREATE_CARD_SUCCESS,
    CRUD_UPDATE_CARD_SUCCESS,
    CRUD_DELETE_CARD_SUCCESS
 } from '../actions/cardActions';

export const cards = (state = [], action) => {
    switch (action.type) {
        case CRUD_CREATE_CARD_SUCCESS:
            return [...state, action.payload];

        case CRUD_UPDATE_CARD_SUCCESS:
            return state.map(card =>
                card.id === action.payload.id ? action.payload : card
            );

        case CRUD_DELETE_CARD_SUCCESS:
            return state.filter(card =>
                card.id === action.payload.id
            );

        default:
            return state;
    }
};