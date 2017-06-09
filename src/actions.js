import { ActionType } from './constants';
import { v4 } from 'uuid';

export const addCard = (title, color) =>
    ({
        type: ActionType.ADD_CARD,
        id: v4(),
        title,
        color
    });

export const editCardTitle = (id, title) =>
    ({
        type: ActionType.EDIT_CARD_TITLE,
        id,
        title
    });

export const editCardColor = (id, color) =>
    ({
        type: ActionType.EDIT_CARD_COLOR,
        id,
        color
    });

export const removeCard = id =>
    ({
        type: ActionType.REMOVE_CARD,
        id
    });