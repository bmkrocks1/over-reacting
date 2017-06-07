import C from './constants';
import { v4 } from 'uuid';

export const addCard = (title, color) =>
    ({
        type: C.ADD_CARD,
        id: v4(),
        title,
        color
    });