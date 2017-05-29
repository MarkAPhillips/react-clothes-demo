import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

export default function() {
	return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
	);
}
