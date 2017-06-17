import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import crudSaga from './sideEffect/saga/crudSaga';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import AppBar from './ui/AppBar';
import Board from './ui/Board';

const App = () => {

    let data = {
        cards: [
            {
                id: '13b10067-c162-44f0-a6be-150aa81448dc',
                title: 'Story #1',
                color: 'blue'
            }
        ]
    };

    const saga = function* rootSaga() {
        yield [
            crudSaga()
        ];
    };
    const sagaMiddleware = createSagaMiddleware();
    const logger = store => next => action => {
        let result;
        console.groupCollapsed('dispatching', action.type);
        console.log('prev state', store.getState());
        console.log('action', action);
        result = next(action);
        console.log('next state', store.getState());
        console.groupEnd();
    };
    const store = createStore(reducer, data, compose(
        applyMiddleware(sagaMiddleware, logger)
    ));

    sagaMiddleware.run(saga);

    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <AppBar />
                    <Board />
                </div>
            </MuiThemeProvider>
        </Provider>
    );
}

export default App;