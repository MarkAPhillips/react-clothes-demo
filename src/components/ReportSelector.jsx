import React, { PropTypes } from 'react';
import * as reportActions from '../actions/reportActions';
import * as gridActions from '../actions/gridActions';
import { connect } from 'react-redux';

class ReportSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(reportActions.onFetch());
    }
    handleOnChange(event) {
        const selectedValue = event.target.value;
        this.props.dispatch(gridActions.onSelect(selectedValue));
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor="{this.props.id}" className="sr-only">Report: </label>
                <select id={this.props.id} name={this.props.id} className="form-control" onChange={this.handleOnChange}>
                    <option value="">{this.props.defaultOptionValue || 'Select Report...'}</option>
                    {
                            this.props.reports.map((item) => {
                                return <option value={item.id} key={item.id}>{item.name}</option>;
                            })
                        }
                </select>
            </div>);
    }
}

ReportSelector.propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    defaultOptionValue: PropTypes.string,
    reports : PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        reports: state.reports.toJS().data
    };
};
export default connect(mapStateToProps)(ReportSelector);