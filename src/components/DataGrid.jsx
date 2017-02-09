import React, { PropTypes } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import * as orderActions from '../actions/orderActions';

class DataGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(orderActions.fetch());
    }
    render() {
        const columnDefs = [{ headerName: 'Order Date', field: 'orderDate' },
        { headerName: 'Delivery Country', field: 'deliveryCountry'},
        { headerName: 'Manufacturer', field: 'manufacturer' },
        { headerName: 'Gender', field: 'gender'},
        { headerName: 'Size', field: 'size' },
        { headerName: 'Colour', field: 'colour' },
        { headerName: 'Style', field: 'style' },
        { headerName: 'Count', field: 'count' }
        ];

        const divStyle = {
            height: '600px'
        };

        return (
            <div className="row">
                <div className="col-sm-12 ag-dark" style={divStyle}>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={this.props.orders}
                        rowSelection="multiple"
                        enableSorting="true"
                        rowHeight="22"
                        colWidth="278"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.toJS().data
    };
};

DataGrid.propTypes = {
    orders: PropTypes.array,
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(DataGrid);