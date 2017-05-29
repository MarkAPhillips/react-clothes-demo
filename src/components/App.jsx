import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GridContainer from './GridContainer';

const App = () => (
    <div className="container">
        <Header />
        <div>
            <GridContainer/>
        </div>
        <Footer />
    </div>
);

export default App;