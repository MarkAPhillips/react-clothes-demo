import React from 'react'; 
import {render} from 'react-dom';
import {Provider} from 'react-redux'; 
import {browserHistory} from 'react-router';

import configureStore from './store/configureStore';
import router from './app.routes';

const store = configureStore();

render(
    <Provider store={store}>
        {router(browserHistory) }
    </Provider>, document.getElementById('app')
);