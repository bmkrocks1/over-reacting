import { connect } from 'react-redux';
import Menu from './Menu';
import Board from './Board';
import { addCard } from '../actions';

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
    null
)(Board);