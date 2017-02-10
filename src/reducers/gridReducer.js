import * as types from '../actions/actionTypes';
import Immutable from 'immutable';
import {columnDefsInitialState} from '../config/gridConfig';

const initialState = Immutable.fromJS({
    reportId: null,
    colDefs: columnDefsInitialState
});

export default function orders(state = initialState, action) {
    switch (action.type) {
        case types.GRID_RESET:
            return Immutable.Map(initialState);
        case types.GRID_SELECTED_START:
            return state;
        case types.GRID_SELECTED_SUCCESS:
           return state.setIn(['colDefs'], action.colDefs);
        case types.GRID_SELECTED_FAILED:
            return state.setIn(['error'], action.error);
        default:
            return state;
    }
}