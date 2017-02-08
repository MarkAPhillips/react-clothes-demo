import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { environment } from '../shared/';

const setDevToolsExtension = () => {
    return window.devToolsExtension && !environment.isProd() ? window.devToolsExtension() : (f) => f;
};

/* Add any middleware to this array */
const middleware = [thunk];

export default function configureStore(initialState) {
    return createStore(
        rootReducer, initialState, compose(applyMiddleware(...middleware), setDevToolsExtension())
    );
}