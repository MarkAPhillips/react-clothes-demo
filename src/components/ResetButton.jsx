import React,{PropTypes} from 'react';
import * as gridActions from '../actions/gridActions';
import { connect } from 'react-redux';
import {events} from '../shared/';

class ResetButton extends React.Component {
     constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }
    handleReset(event) {
        events.stopEventPropagation(event);
        this.props.dispatch(gridActions.onReset());
    }
    render() {
        return (
            <div className="form-group pull-right">
                <button className="btn btn-primary" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ResetButton.propTypes = {
    dispatch: PropTypes.func
};

export default connect()(ResetButton);