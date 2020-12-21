import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const composeEnchancher = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,composeEnchancher(applyMiddleware(thunk)));

export default store;