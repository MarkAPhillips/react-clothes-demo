import React from 'react'; 
import {render} from 'react-dom';
import {Provider} from 'react-redux'; 
import {browserHistory} from 'react-router';
import {LicenseManager} from 'ag-grid-enterprise/main';
import AppConstants from './app.constants';
import configureStore from './store/';
import router from './app.routes';

const store = configureStore();
LicenseManager.setLicenseKey(AppConstants.AG_GRID.KEY);

render(
    <Provider store={store}>
        {router(browserHistory) }
    </Provider>, document.getElementById('app')
);