import React, { PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node
};


export default Layout;