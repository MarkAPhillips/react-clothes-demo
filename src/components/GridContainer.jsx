import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Datagrid from './Datagrid';
import * as orderActions from '../actions/orderActions';

class GridContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(orderActions.onFetch());
	}
    render() {
        const divStyle = {
            minHeight: '450px'
        };
        return (
            <section>
                <div className="row">
                    <div className="col-sm-12" style={divStyle}>
                        <Datagrid data={this.props.orders}/>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.toJS().data
    };
};

GridContainer.propTypes = {
    orders: PropTypes.array,
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(GridContainer);