export const CRUD_GET_LIST_CARD = 'CRUD_GET_LIST_CARD';
export const CRUD_GET_LIST_LOADING_CARD = 'CRUD_GET_LIST_CARD_LOADING';
export const CRUD_GET_LIST_SUCCESS_CARD = 'CRUD_GET_LIST_CARD_SUCCESS';
export const CRUD_GET_LIST_FAILURE_CARD = 'CRUD_GET_LIST_CARD_FAILURE';

export const crudGetListCard = () => ({
    type: CRUD_GET_LIST_CARD,
    payload: {}
});

export const CRUD_CREATE_CARD = 'CRUD_CREATE_CARD';
export const CRUD_CREATE_CARD_LOADING = 'CRUD_CREATE_CARD_LOADING';
export const CRUD_CREATE_CARD_SUCCESS = 'CRUD_CREATE_CARD_SUCCESS';
export const CRUD_CREATE_CARD_FAILURE = 'CRUD_CREATE_CARD_FAILURE';

export const crudCreateCard = (title, color) => ({
    type: CRUD_CREATE_CARD,
    payload: { title, color }
});


export const CRUD_UPDATE_CARD = 'CRUD_UPDATE_CARD';
export const CRUD_UPDATE_CARD_LOADING = 'CRUD_UPDATE_CARD_LOADING';
export const CRUD_UPDATE_CARD_SUCCESS = 'CRUD_UPDATE_CARD_SUCCESS';
export const CRUD_UPDATE_CARD_FAILURE = 'CRUD_UPDATE_CARD_FAILURE';

export const crudUpdateCard = (id, title, color) => ({
    type: CRUD_UPDATE_CARD,
    payload: { id, title, color }
});


export const CRUD_DELETE_CARD = 'CRUD_DELETE_CARD';
export const CRUD_DELETE_CARD_LOADING = 'CRUD_DELETE_CARD_LOADING';
export const CRUD_DELETE_CARD_SUCCESS = 'CRUD_DELETE_CARD_SUCCESS';
export const CRUD_DELETE_CARD_FAILURE = 'CRUD_DELETE_CARD_FAILURE';

export const crudDeleteCard = id => ({
    type: CRUD_DELETE_CARD,
    payload: { id }
});