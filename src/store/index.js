import { createStore, combineReducers } from 'redux';
import { cards } from './reducers';
import initialState from './initialState';

const storeFactory = () =>
    createStore(
        combineReducers({ cards }),
        initialState
    );

export default storeFactory;