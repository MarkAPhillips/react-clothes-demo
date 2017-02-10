import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import ReportSelector from './ReportSelector';
import ResetButton  from './ResetButton';
import * as orderActions from '../actions/orderActions';
import * as gridActions from '../actions/gridActions';

class DataGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(gridActions.onReset());
        this.props.dispatch(orderActions.onFetch());
    }
    render() {
        const divStyle = {
            height: '450px'
        };
        return (
            <section>
                <div className="row ">
                    <div className="col-sm-12 bottom-10">
                        <form className="form-inline">    
                            <ReportSelector id="report-selector"/><ResetButton/>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 ag-dark" style={divStyle}>
                        <AgGridReact
                            rowData={this.props.orders}
                            columnDefs = {this.props.columnDefs}
                            rowSelection="multiple"
                            enableSorting="true"
                            rowHeight="22"
                            colWidth="278"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.toJS().data,
        columnDefs : state.grid.toJS().colDefs
    };
};

DataGrid.propTypes = {
    orders: PropTypes.array,
    columnDefs : PropTypes.any,
    dispatch: PropTypes.func
};

export default connect(mapStateToProps)(DataGrid);