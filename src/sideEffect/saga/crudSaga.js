import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    CRUD_CREATE_CARD,
    CRUD_UPDATE_CARD
} from '../../actions/cardActions';

function* handleCardUpdate(action) {
    const { type, payload } = action;

    try {
        let response = yield call(
            axios.post, 
            'http://demo6690776.mockable.io/cards', // TODO: rest api
            payload
        );

        yield put({
            type: `${type}_SUCCESS`,
            payload: response.data
        });
    }
    catch (error) {
        yield put({
            type: `${type}_FAILURE`,
            error: error.message ? error.message : error
        });
    }
}

function* watchCardCrud() {
    yield [
        takeEvery(CRUD_CREATE_CARD, handleCardUpdate),
        takeEvery(CRUD_UPDATE_CARD, handleCardUpdate)
    ];
}

export default function* crudSaga() {
    yield [
        watchCardCrud()
    ];
}