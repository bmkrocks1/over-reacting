import C from '../constants';

export const card = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_CARD:
            return {
                id: action.id,
                title: action.title,
                color: action.color
            };
        default:
            return state;
    }
};

export const cards = (state = [], action) => {
    switch (action.type) {
        case C.ADD_CARD:
            let newState = [...state, card({}, action)];
            console.log(newState);
            return newState;
        default:
            return state;
    }
};