import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { environment } from '../shared/';

/** Used to debug Redux on Chrome in the DEV environment */
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