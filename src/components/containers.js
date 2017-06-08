import { connect } from 'react-redux';
import Menu from './Menu';
import Board from './Board';
import { addCard, editCardTitle } from '../actions';

export const MenuContainer = connect(
    null,
    dispatch =>
        ({
            onNewCard(title, color) {
                dispatch( addCard(title, color) );
            }
        })
)(Menu);

export const BoardContainer = connect(
    state =>
        ({
            cards: [...state.cards]
        }),
    dispatch =>
        ({
            onEditTitle(id, newTitle) {
                dispatch( editCardTitle(id, newTitle) );
            }
        })
)(Board);