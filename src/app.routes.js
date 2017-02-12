import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import Layout from './components/Layout';
import DataGrid from './components/DataGrid';

export default function (history) {
    return (<Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={DataGrid} />
        </Route>
    </Router>);
}